public class Solution {

	public static void main(String[] args)
	{
		Client client = new Client();

		char c1 = 0;
		char c2 = 0;
		char c3 = 0;
		char c4 = 0;

		for(char i = 0; i < 10; i++){
			// ASCII numbers start at value 48
			c1 = (char)(48+i);

			for(char j = 0; j < 10; j++){
				// ASCII numbers start at value 48
				c2 = (char)(48+j);

				for(char k = 32; k < 127; k++){
					c3 = k;

					for(char l = 32; l < 127; l += 2){
						c4 = l;

						// Make sure last 2 chars are not the same
						if(c3 == c4)
							continue;

						boolean response = client.sendMessage(c1, c2, c3, c4);

						if(response){
							return;
						}

					}
				}
			}
		}


	}

}
