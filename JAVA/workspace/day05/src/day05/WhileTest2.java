package day05;

import java.util.Scanner;

public class WhileTest2 {
	public static void main(String[] args) {
		/*
		 * ����� mbti��? 1.ISFJ - �����ϰ� �γ����� ���ϴ�. 2.INFJ - �������� ���� ����鿡�� ������ �ش�. 3.ESFP -
		 * ȣ����� ���� �������̴�. 4.ENTJ - ö���� �غ��ϰ� Ȱ�����̴�.
		 */
		while (true) {
			String msg = "����� mbti��?\n" + "1.ISFJ\n" + "2.INFJ\n" + "3.ESFP\n" + "4.ENTJ\n" + "���� : ";
			String isfj = "�����ϰ� �γ����� ���ϴ�.", infj = "�������� ���� ����鿡�� ������ �ش�.", esfp = "ȣ����� ���� �������̴�.",
					entj = "ö���� �غ��ϰ� Ȱ�����̴�", errMsg = "�߸� �Է��ϼ̽��ϴ�.";
			Scanner sc = new Scanner(System.in);
			String result = null;
			int choice = 0;

			System.out.println(msg);
			choice = sc.nextInt();
			if (choice == 5) {
				break;
			}
			switch (choice) {
			case 1:
				result = isfj;
				break;
			case 2:
				result = infj;
				break;
			case 3:
				result = esfp;
				break;
			case 4:
				result = entj;
				break;
			default:
				result = errMsg;
			}
			System.out.println(result);

		}
	}
}
