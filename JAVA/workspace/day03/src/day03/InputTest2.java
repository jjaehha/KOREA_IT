package day03;

import java.util.Scanner;

public class InputTest2 {
	public static void main(String[] args) {
		
		int num1 = 0, num2 = 0, num3 = 0;
		
		Scanner sc = new Scanner(System.in);
		System.out.print("�ݾ� �Է�: ");
		num1 = sc.nextInt();
		num2 = num1 / 300;
		num3 = num1 % 300;
		
		System.out.println(num2 + "���� �θ� �� ������ �ܵ��� " + num3 + "�� �Դϴ�.");
	}

}
