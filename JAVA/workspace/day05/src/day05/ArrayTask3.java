package day05;

import java.util.Scanner;

public class ArrayTask3 {
	public static void main(String[] args) {
		// 5개의 정수를 입력한 뒤 배열에 담고 최소값 최대값 출력하기
		Scanner sc = new Scanner(System.in);
		int arr[] = new int[5];
		int max = arr[0];
		int min = arr[0];
		for (int i = 0; i < arr.length; i++) {
			System.out.println(i + 1+  "번째 정수 입력");
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
