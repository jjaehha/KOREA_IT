package project;

import java.util.Random;
import java.util.Scanner;

public class LandomDice {
	public static void main(String[] args) {
		int userNum = 0, randomDice = 0;
		Scanner sc = new Scanner(System.in);
		Random ran = new Random();

		// while��
		while (true) {
			System.out.println("�ֻ����� �����ϴ�.");
			System.out.println("���� �Է��ϼ���");
			userNum = sc.nextInt();

			randomDice = ran.nextInt(6) + 1;

			// ����ó��
			if (userNum < 7) {
				if (userNum != randomDice) {
					System.out.println("Ʋ�Ƚ��ϴ� ����" + randomDice + "�Դϴ�");
					System.out.println("=====================");

				} else if (userNum == randomDice) {
					System.out.println("������ϴ�. ���α׷��� �����մϴ�");
					break;
				} else {
					System.out.println("�߸��� ��� �Դϴ�. ó������ �ٽ� �õ����ּ���. \n ���α׷��� �����մϴ�");
					break;
				}

			} else {
				System.out.println("���ڸ� �߸��Է� �߽��ϴ�. \n ���α׷��� �����մϴ�");
				break;
			}

			continue;
		}
	}
}