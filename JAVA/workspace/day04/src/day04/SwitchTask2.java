package day04;

import java.util.Scanner;

import javax.annotation.processing.SupportedSourceVersion;

public class SwitchTask2 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num1=0, num2=0;
		String msg = "정수를 입력하세요";
		String result = null;
		
		System.out.println(msg);
		num1 = sc.nextInt();
		num2 = num1%2;
		
		switch(num2) {
		case 0:
			result = "짝수";
			break;
		default:
			result = "홀수";
		}
		
			
	}
}
