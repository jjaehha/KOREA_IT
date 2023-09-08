package day03;

import java.util.Scanner;

public class InputTest2 {
	public static void main(String[] args) {
		
		int num1 = 0, num2 = 0, num3 = 0;
		
		Scanner sc = new Scanner(System.in);
		System.out.print("금액 입력: ");
		num1 = sc.nextInt();
		num2 = num1 / 300;
		num3 = num1 % 300;
		
		System.out.println(num2 + "곡을 부를 수 있으며 잔돈은 " + num3 + "워 입니다.");
	}

}
