package day05;

public class ForTest1 {
	public static void main(String[] args) {
		// A~ F ���
		// 65~70

		for (int i = 0; i < 6; i++) {
			System.out.println((char) (i + 65));
		}

		// aBcDeFgHiJkLmNoPqRsTuVwXyZ ���
		// 26( ���ĺ� ����)
		// a == 97 A == 65
		for (int i = 0; i < 26; i++) {
			if (i % 2 == 0) {
				System.out.print((char) (i + 97));
			} else {
				System.out.print((char) (i + 65));
			}
		}

	}
}
