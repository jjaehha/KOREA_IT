package day06;

import java.util.Scanner;

public class LockerTask {
	/*
	 * 1. 5칸짜리 사물함의 비밀번호를 각각 배열에 저장한다. 2. 사용자에게 이용할 사물함 번호를 묻는다. 3. 비밀번호를 입력받아 확인한다
	 * 4. 일치/불일치 출력.
	 */
	static Scanner sc = new Scanner(System.in);
	static String msg = "번 사물함의 비밀번호를 설정:";
	public static void main(String[] args) {
		int[] arPw = new int[5];
		int choice = 0, inputPw = 0;
		String choiceMsg = "사용할 사물함의 번호: ";
		String inputMsg = "비밀번호를 입력하세요: ";
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
	// 패스워드를 설정
	int[] setLockerPw(int[] arPw) {
		for (int i = 0; i < arPw.length; i++) {
			System.out.println(i + 1 + msg);
			arPw[i] = sc.nextInt();
		}
		return arPw;
	}
	// 패스워드를 확인
	String checkLockerPw(int LockerPw, int inputPw) {
		String result = null;
		if (LockerPw == inputPw) {
			result = "비밀번호가 일치합니다";
		} else {
			result = "비밀번호가 일치하지 않습니다";
		}
		return result;
	}
}
