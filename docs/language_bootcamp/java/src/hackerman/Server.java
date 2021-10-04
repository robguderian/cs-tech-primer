import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Random;


// Code[0] - Number
// Code[1] - Number
// Code[2] - *
// Code[3] - Even

// BREACH
// Last 2 same char
// 446500 guesses

public class Server {

	private ServerSocket serverSocket;
	private Socket clientSocket;
	private PrintWriter out;
	private BufferedReader in;
	private boolean breachDetected;
	private boolean passwdHit;

	private final char[] passwd;
	private int attemptCount;
	private static final int MAX_ATTEMPTS = 446500;
	private final int port;

	private static final char CHAR_TERMINATE = 'T';
	private static final char CHAR_FAIL = 'F';
	private static final char CHAR_PASS = 'P';

	public static void main(String[] args)
	{
		Server server= new Server();
		server.start();
		server.listen();
		server.stop();
	}

	public Server()
	{
		passwd = new char[4];
		Random rand = new Random();

		passwd[0] = (char) (48 + rand.nextInt(10));
		passwd[1] = (char) (48 + rand.nextInt(10));

		// 95 possible characters
		while(passwd[2] == passwd[3]){
			passwd[2] = (char) (32 + rand.nextInt(95));
			passwd[3] = (char) (32 + rand.nextInt((95) / 2) * 2);
		}

		breachDetected = false;
		passwdHit = false;
		attemptCount = 0;
		port = 6666; // TODO: What if port is already in use?

		System.out.println("Server running on port " + port);
	}

	public void start()
	{
		try {
			serverSocket = new ServerSocket(port);
			clientSocket = serverSocket.accept();
			out = new PrintWriter(clientSocket.getOutputStream(), true);
			in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}

	}

	public void listen()
	{
		try {
			String input;
			while (!passwdHit && (input = in.readLine()) != null) {

				attemptCount++;

				char[] code = input.toCharArray();
				String result = checkCode(code);

				out.println(result);

				if(breachDetected)
					panic();

			}
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}

	private String checkCode(char[] code)
	{
		String result;

		if(checkBreachAttempt(code)){
			result = CHAR_TERMINATE + " DETECTED BREACH...SERVER SHUTTING DOWN";
			System.out.println("!!! BREACH DETECTED: [" + codeToString(code) + "] !!!");
			breachDetected = true;
		}
		else if(checkFailAttempt(code)){
			result = CHAR_FAIL + " FAIL";
			System.out.println("FAILED ATTEMPT: [" + codeToString(code) + "]");
			if (attemptCount >= MAX_ATTEMPTS) {
				result = CHAR_TERMINATE + " TOO MANY ATTEMPTS (" + attemptCount + ")\nSERVER SHUTTING DOWN";
				System.out.println("!!! BREACH DETECTED: TOO MANY ATTEMPTS [" + attemptCount + "] !!!");
				breachDetected = true;
			}
		}
		else {
			result = CHAR_PASS + " Wake up, Neo...";
			System.out.println("Welcome, " + System.getProperty("user.name"));
			passwdHit = true;
		}

		return result;
	}

	private boolean checkBreachAttempt(char[] code)
	{
		if(code.length != passwd.length)
			return true;

		if(code[code.length - 1] == code[code.length -2])
			return true;

		return false;
	}

	private boolean checkFailAttempt(char[] code)
	{
		if(code[code.length-1] % 2 != 0)
			return true;

		for(int i = 0; i < passwd.length; i++) {
			if (code[i] != passwd[i]) {
				return true;
			}
		}
		return false;
	}

	private void panic()
	{
		System.out.println("!!! SERVER PANIC INITIATED !!!");
		stop();
		System.exit(-1);
	}

	public void stop()
	{

		try {
			in.close();
			out.close();
			clientSocket.close();
			serverSocket.close();
		}
		catch (Exception e) {
			System.out.println(e.getMessage());
		}
		System.out.println("Server stopped, passcode: " + codeToString(passwd));
	}

	private String codeToString(char[] code)
	{
		StringBuilder result = new StringBuilder();
		for(char c : code){
			result.append(c);
		}
		return result.toString();
	}

}