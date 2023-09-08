package day02;

import java.util.Scanner;

public class InputTask1 {
	public static void main(String[] args) {
		// 이름을 입력하세요: 홍길동
		// 홍길동님 안녕하세요
		// printf
		
		Scanner sc = new Scanner(System.in);
		System.out.print("이름을 입력하세요:");
		System.out.printf( "%s 님 안녕하세요",sc.next());
		
	}

}
