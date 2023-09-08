package day03;

public class OperTest {
	public static void main(String[] args) {
		System.out.println(10 == 10);
		System.out.println(10 != 10);
		
		int num1 = 10, num2 = 20;
		boolean isTrue = num1 >= 10 && num2 == 20;
		boolean isTrue2 = num1 < 10 || num2 == 20;
		
		System.out.println(num1 == num2);
		System.out.println(num1 != num2);
		System.out.println(num1 > 10);
		
		System.out.println(false);
	}

}
