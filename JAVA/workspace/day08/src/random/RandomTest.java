package random;

import java.util.Random;
import java.util.Scanner;

class Enhance {
	boolean[] arChance = { true, true, true, true, true, true, true, false, false, false };
	String weapon;
	int cnt;

	public Enhance(String weapon) {
		this.weapon = weapon;
	}

	void start() {
		Random r = new Random();
		int index = r.nextInt(10); // 0~9���� ������ ���ڰ� ���´�.
		if (arChance[index]) {
			cnt++;
			System.out.println("��ȭ�� �����߽��ϴ�");
		} else {
			cnt = 0;
			System.out.println("��ȭ�� �����߽��ϴ�.");
		}
	}

	void printInfo() {
		System.out.println(weapon + "+" + cnt + "��");
	}
}

public class RandomTest {
	public static void main(String[] args) {
		Enhance e = new Enhance("���");
		String msg = "1. ��ȭ����\n" + "2. ����";
		Scanner sc = new Scanner(System.in);
		int choice = 0;
		boolean flag = true;
		String input = null;

		while (flag) {
			System.out.println(msg);
			choice = sc.nextInt();

			switch (choice) {
			case 1:
				e.start();
				e.printInfo();
				break;
			case 2:
				System.out.println("�����Ϸ��� \"����\" ��� �Է��ϼ���");
				input = sc.next();
				if(input.equals("����")) {
					flag = false;
				} else {
					System.out.println("�߸��Է��߽��ϴ�");
				}
				break;
			default:
				System.out.println("�߸��Է��߽��ϴ�");
			}
		}
	}
}