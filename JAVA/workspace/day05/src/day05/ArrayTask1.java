package day05;

import java.util.Scanner;

public class ArrayTask1 {
	public static void main(String[] args) {
		// 100~1까지의 값을 배열에 넣고 출력
//		int arr [] = new int [100];
//		for(int i = 0; i<arr.length; i++) {
//			arr[i] = 100 - i;
//			System.out.println(arr[i]);
//		}

		// 1 ~ 10까지의 값을 배열에 넣고 총합 구하기
//		int ar1 [] = new int [10];
//		int total = 0;
//		for(int i = 0; i<ar1.length; i++) {
//			ar1[i] = i + 1;
//			total += ar1[i];
//		}
//		System.out.println(total);

		// 3명의 자바점수를 사용자에게 받아서 배열에 저장하고 평균점수 출력

		Scanner sc = new Scanner(System.in);
		int total = 0;
		int ar2 [] = new int [3];
		for (int i = 0; i<ar2.length; i++) {
			System.out.println(i+1+"번 학생의 자바점수:");
			ar2[i] = sc.nextInt();
			total += ar2[i];
		}
		System.out.println("이 3명의 학생의 평균점수는" + total / 3.0);
	}
}
