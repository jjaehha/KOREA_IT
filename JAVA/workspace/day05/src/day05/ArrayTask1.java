package day05;

import java.util.Scanner;

public class ArrayTask1 {
	public static void main(String[] args) {
		// 100~1������ ���� �迭�� �ְ� ���
//		int arr [] = new int [100];
//		for(int i = 0; i<arr.length; i++) {
//			arr[i] = 100 - i;
//			System.out.println(arr[i]);
//		}

		// 1 ~ 10������ ���� �迭�� �ְ� ���� ���ϱ�
//		int ar1 [] = new int [10];
//		int total = 0;
//		for(int i = 0; i<ar1.length; i++) {
//			ar1[i] = i + 1;
//			total += ar1[i];
//		}
//		System.out.println(total);

		// 3���� �ڹ������� ����ڿ��� �޾Ƽ� �迭�� �����ϰ� ������� ���

		Scanner sc = new Scanner(System.in);
		int total = 0;
		int ar2 [] = new int [3];
		for (int i = 0; i<ar2.length; i++) {
			System.out.println(i+1+"�� �л��� �ڹ�����:");
			ar2[i] = sc.nextInt();
			total += ar2[i];
		}
		System.out.println("�� 3���� �л��� ���������" + total / 3.0);
	}
}
