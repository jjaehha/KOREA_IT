package day03;

import java.util.Scanner;

public class OperTask1 {
	public static void main(String[] args) {
		int num1 = 0, num2 = 0;
		Scanner sc = new Scanner(System.in);
		
		String result = null;
		String msg1 = "첫번째 정수 : ";
		String msg2 = "두번째 정수 : ";
		
		System.out.println(msg1);
		num1 = sc.nextInt();
		System.out.println(msg2);
		num2 = sc.nextInt();
		
		result = num1 == num2 ? "같은 숫자입니다" : num1 > num2 ? "큰 수: " + num1 : "큰 수:" + num2;
		System.out.println(result);
	}
}
