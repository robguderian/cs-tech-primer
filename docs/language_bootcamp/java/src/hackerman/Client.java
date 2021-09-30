import java.io.*;
import java.net.*;


public class Client {

	private Socket clientSocket;
	private PrintWriter printWriter;
	private BufferedReader buffReader;

	public Client()
	{
		startConnection("127.0.0.1", 6666);
	}

	public void startConnection(String ip, int port)
	{
		try {
			clientSocket = new Socket(ip, port);
			printWriter = new PrintWriter(clientSocket.getOutputStream(), true);
			buffReader = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
			System.out.println("Make sure the server is running!");
			System.exit(-1);
		}
	}

	public boolean sendMessage(char c1, char c2, char c3, char c4)
	{
		try {
			String code = "" + c1 + c2 + c3 + c4;
			System.out.print("[" + code + "]: ");
			printWriter.println(code);
			String response = buffReader.readLine();
			System.out.println(response.substring(2));

			if(response.charAt(0) == 'T') // Server will terminate
				System.exit(-1);
			else if(response.charAt(0) == 'P') // Success!
				System.out.println("\nCongratulations! You've passed the section 2 challenge :)\n");

			return (response.charAt(0) == 'P');
		}
		catch(Exception e) {
			stopConnection();
			System.out.println(e.getMessage());
			System.exit(-1);
			return false;
		}
	}

	private void stopConnection()
	{
		try {
			buffReader.close();
			printWriter.close();
			clientSocket.close();
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
