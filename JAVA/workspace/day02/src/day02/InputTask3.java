package day02;

import java.util.Scanner;

public class InputTask3 {
	public static void main(String[] args) {
		// �������� �Է¹ް� ���� ����Ѵ�
		// next() ���
		
		// ex) ����1 �Է�: 13
		// ex) ����2 �Է� : 30
		
		// �� ������ ���� 43�Դϴ�.
		
		Scanner sc = new Scanner(System.in);
		
		// �����Ѱ�
//		System.out.print("���� 1 �Է�: ");
//		int str1 = Integer.parseInt(sc.next());
//		System.out.print("���� 2 �Է�: ");
//		int str2 = Integer.parseInt(sc.next());
//		System.out.println("�� ������ ����" + (str1 + str2) +"�Դϴ�");
		
		// ��
		int num1 = 0, num2 = 0;
		String msg1 ="����1 �Է�: ", msg2 = "����2 �Է�: ";
		System.out.print(msg1);
		num1 = sc.nextInt();
		System.out.print(msg2);
		num2 = sc.nextInt();
		System.out.println("�� ������ ����" +(num1 + num2) +"�Դϴ�");
		
		// �⺻��
		// int: 0
		// double: 0.0
		// char: ' '
		// String: "", null
		// boolean: false
		
	}

}
