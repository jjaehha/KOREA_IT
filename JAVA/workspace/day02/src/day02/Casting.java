package day02;

public class Casting {
	public static void main(String[] args) {
		System.out.println(10/3);
		System.out.println(10/3.0);
		
		String number1 = "10";
		int number2 = 3;
		int age = 17;
		
//		System.out.println(number1/(double)number2);
		System.out.println((char)('A'+1));
		System.out.println((int)(3.7));
		System.out.println((double)(1));
		System.out.println((char)(97));
		
		System.out.println(number1+number2);
		System.out.println(3+2+"5"+10);
		String name = "김재하";
		System.out.println("제 이름은" + name + "입니다");
		System.out.println("제 나이는" + age + "세 입니다");
		
		System.out.println(number1+3);
		System.out.println(Integer.parseInt(number1)+3);
		
		String number3 ="4.0";
		System.out.println(Double.parseDouble(number3)+3);
	}
}
