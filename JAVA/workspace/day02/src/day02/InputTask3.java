package day02;

import java.util.Scanner;

public class InputTask3 {
	public static void main(String[] args) {
		// 두정수를 입력받고 합을 출력한다
		// next() 사용
		
		// ex) 정수1 입력: 13
		// ex) 정수2 입력 : 30
		
		// 두 정수의 합은 43입니다.
		
		Scanner sc = new Scanner(System.in);
		
		// 내가한거
//		System.out.print("정수 1 입력: ");
//		int str1 = Integer.parseInt(sc.next());
//		System.out.print("정수 2 입력: ");
//		int str2 = Integer.parseInt(sc.next());
//		System.out.println("두 정수의 합은" + (str1 + str2) +"입니다");
		
		// 답
		int num1 = 0, num2 = 0;
		String msg1 ="정수1 입력: ", msg2 = "정수2 입력: ";
		System.out.print(msg1);
		num1 = sc.nextInt();
		System.out.print(msg2);
		num2 = sc.nextInt();
		System.out.println("두 정수의 합은" +(num1 + num2) +"입니다");
		
		// 기본값
		// int: 0
		// double: 0.0
		// char: ' '
		// String: "", null
		// boolean: false
		
	}

}
