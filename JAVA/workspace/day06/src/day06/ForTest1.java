package day06;

public class ForTest1 {
	public static void main(String[] args) {
		/*
		 * *
		 * ** 
		 * *** 
		 * ****
		 */
//		for(int i=0; i<5; i++) {
//			for(int j=0; j<i+1; j++) {
//				System.out.print("*");
//			}
//			System.out.println("");
//		}

		/*
		 * *****
		 * ***
		 * **
		 * *
		 */
//		for (int i = 5; i > 0; i--) {
//			for (int j = 0; j < i; j++) {
//				System.out.print("*");
//			}
//			System.out.println();
//		}
		
		/*
		 *   *
		 * 	***
		 * *****
		 */
		
		for (int i=0; i<3; i++) {
			for(int j=0; j<4-i; j++) {
				System.out.print(" ");
			}
			for(int k=0; k<i*2+1; k++) {
				System.out.print("*");
			}
			System.out.println();
		}
	}

}
