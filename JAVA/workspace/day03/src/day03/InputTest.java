package day03;

import java.util.Scanner;

public class InputTest {
	public static void main(String[] args) {
		/*
		 * ���ڸ��� ������ �Է¹ް� �����ڸ�
		 * �����ڸ��� ����ϴ� ���α׷�
		 * 
		 * 1. ���� 1���� �����Ѵ�(int)
		 * 2. ����Ѵ�.("���ڸ��� ������ �Է��Ͻÿ�.:")
		 * 3. �Է¹޾Ƽ� �����Ѵ�.
		 * 4. �����Ѵ�
		 * 	4-1. �Է¹��� ���� 10���� ������(10���ڸ�)
		 * 	4-2. �Է¹��� ���� 10���� ���� �� �������� ���Ѵ�(1�� �ڸ�)
		 * 5. ��� ���
		 * 	"53�� �����ڸ��� 5�̰�, �����ڸ��� 3�̴�."
		 */
		
		
		int num1, num2, num3;
		
		Scanner sc = new Scanner(System.in);
		System.out.print("���ڸ��� ������ �Է��Ͻÿ�.: ");
		num1 = sc.nextInt();
		
		num2 = num1 /10;
		num3 = num1 %10;
		
		System.out.println(num1 + "�� �����ڸ���" + num2 +"�̰�, �����ڸ���" + num3 + "�̴�.");
		

	}

}
