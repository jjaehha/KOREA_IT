package project;

import java.util.Random;

public class Lotto {
	public static void main(String[] args) {
		
		int lottoNum = 0;
		Random ran = new Random();
		
		for (int i=0; i<6; i++) {
			lottoNum = (ran.nextInt(45)+1);
			for(int j = 0; j < i; j++) {
				if(i == j) {
					i--;
					break;
				}
			}
			System.out.println("�ζǹ�ȣ��" + lottoNum + "�Դϴ�");
		}
		
		System.out.println("===============");
		
		// ���� �迭 ����϶�� �Ͻǰ� ���Ƽ� �ϳ��� �غ��ϴ�
		int ar[] = new int[6];
		
		for(int i=0; i< ar.length; i++) {
			lottoNum = ran.nextInt(45)+1;
			ar[i] = lottoNum;
			for(int j = 0; j < i; j++) {
				if(ar[i] == ar[j]) {
					i--;
					break;
				}
			}
			System.out.println("�ζǹ�ȣ��" + ar[i] + "�Դϴ�");
		}
	}

}