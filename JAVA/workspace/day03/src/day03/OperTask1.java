package day03;

import java.util.Scanner;

public class OperTask1 {
	public static void main(String[] args) {
		int num1 = 0, num2 = 0;
		Scanner sc = new Scanner(System.in);
		
		String result = null;
		String msg1 = "ù��° ���� : ";
		String msg2 = "�ι�° ���� : ";
		
		System.out.println(msg1);
		num1 = sc.nextInt();
		System.out.println(msg2);
		num2 = sc.nextInt();
		
		result = num1 == num2 ? "���� �����Դϴ�" : num1 > num2 ? "ū ��: " + num1 : "ū ��:" + num2;
		System.out.println(result);
	}
}
