public class Casting {

	public static void main(String[] args){
		byte b = 10;
		short s = b;
		int i = s;
		long l = i;
		float f = l;
		double d = f;

		System.out.println("W I D E");
		System.out.println(b);
		System.out.println(s);
		System.out.println(i);
		System.out.println(l);
		System.out.println(f);
		System.out.println(d);

		// char c = 256; // Compiler error
		// short s = c; // Compiler error

		d = 123456789.987564321;
		f = (float)d;
		l = (long)f;
		i = (int)l;
		s = (short)i;
		b = (byte)b;

		System.out.println("narrow");
		System.out.println(b);
		System.out.println(s);
		System.out.println(i);
		System.out.println(l);
		System.out.println(f);
		System.out.println(d);


		System.out.println("Arithmetic");
		int x = 9;
		int y = 2;
		double z = x / y;
		System.out.println(z);

		z = (double)x / (double)y;
		System.out.println(z);
	}

}
