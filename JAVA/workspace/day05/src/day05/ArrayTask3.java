package day05;

import java.util.Scanner;

public class ArrayTask3 {
	public static void main(String[] args) {
		// 5���� ������ �Է��� �� �迭�� ��� �ּҰ� �ִ밪 ����ϱ�
		Scanner sc = new Scanner(System.in);
		int arr[] = new int[5];
		int max = arr[0];
		int min = arr[0];
		for (int i = 0; i < arr.length; i++) {
			System.out.println(i + 1+  "��° ���� �Է�");
			arr[i] = sc.nextInt();
			if(arr[i]>max) {
				max = arr[i];
			}
			if (arr[i] < min) {
				min = arr[i];
			}
			
		}
		System.out.println(max);
		System.out.println(min);
	}
}
