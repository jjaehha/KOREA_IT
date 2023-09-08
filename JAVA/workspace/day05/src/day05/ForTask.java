package day05;

public class ForTask {
	public static void main(String[] args) {
		int a = 0, b = 0;

		for (a = 2; a < 10; a++) {
			System.out.println(a + "´Ü");
			for (b = 1; b < 10; b++) {
				System.out.println(a + "X" + b + "=" + a * b);
			}
		}
	}

}
