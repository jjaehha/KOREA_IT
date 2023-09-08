package project;

import java.util.Random;
import java.util.Scanner;

public class LandomDice {
	public static void main(String[] args) {
		int userNum = 0, randomDice = 0;
		Scanner sc = new Scanner(System.in);
		Random ran = new Random();

		// while문
		while (true) {
			System.out.println("주사위를 던집니다.");
			System.out.println("값을 입력하세요");
			userNum = sc.nextInt();

			randomDice = ran.nextInt(6) + 1;

			// 예외처리
			if (userNum < 7) {
				if (userNum != randomDice) {
					System.out.println("틀렸습니다 값은" + randomDice + "입니다");
					System.out.println("=====================");

				} else if (userNum == randomDice) {
					System.out.println("맞췄습니다. 프로그램을 종료합니다");
					break;
				} else {
					System.out.println("잘못된 경로 입니다. 처음부터 다시 시도해주세요. \n 프로그램을 종료합니다");
					break;
				}

			} else {
				System.out.println("숫자를 잘못입력 했습니다. \n 프로그램을 종료합니다");
				break;
			}

			continue;
		}
	}
}
