package dat05;

public class ForTest2 {
	public static void main(String[] args) {

//		for(int i=0; i<0; i++) {
//			System.out.println(i);
//			if(i==3) {
//				continue;
//			}
//		}
		int total = 0;

		for (int i = 0; i < 100; i++) {
			if (i % 2 == 0) {
				continue;
			}
			total += i + 1;
		}
		System.out.println(total);
	}
}
