package day06;

import java.util.Scanner;

public class LockerTask {
	/*
	 * 1. 5ĭ¥�� �繰���� ��й�ȣ�� ���� �迭�� �����Ѵ�. 2. ����ڿ��� �̿��� �繰�� ��ȣ�� ���´�. 3. ��й�ȣ�� �Է¹޾� Ȯ���Ѵ�
	 * 4. ��ġ/����ġ ���.
	 */
	static Scanner sc = new Scanner(System.in);
	static String msg = "�� �繰���� ��й�ȣ�� ����:";
	public static void main(String[] args) {
		int[] arPw = new int[5];
		int choice = 0, inputPw = 0;
		String choiceMsg = "����� �繰���� ��ȣ: ";
		String inputMsg = "��й�ȣ�� �Է��ϼ���: ";
		String result = null;
		
		LockerTask lt = new LockerTask();
		lt.setLockerPw(arPw);


		System.out.println(choiceMsg);
		choice = sc.nextInt();
		System.out.println(inputMsg);
		inputPw = sc.nextInt();

		result = lt.checkLockerPw(arPw[choice-1], inputPw);
		System.out.println(result);
		


	}
	// �н����带 ����
	int[] setLockerPw(int[] arPw) {
		for (int i = 0; i < arPw.length; i++) {
			System.out.println(i + 1 + msg);
			arPw[i] = sc.nextInt();
		}
		return arPw;
	}
	// �н����带 Ȯ��
	String checkLockerPw(int LockerPw, int inputPw) {
		String result = null;
		if (LockerPw == inputPw) {
			result = "��й�ȣ�� ��ġ�մϴ�";
		} else {
			result = "��й�ȣ�� ��ġ���� �ʽ��ϴ�";
		}
		return result;
	}
}
