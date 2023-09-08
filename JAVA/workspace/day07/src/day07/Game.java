package day07;

import java.util.Scanner;

class Creature {

	//ĳ�����̸�
	String name;
	//hp
	int hp;
	//����� ��
	int eatCnt;
	//��
	int turn;
	//��
	boolean poo;

	//�Ա�: �� 1����, hp 2����, �Դ� ī��Ʈ 1����
	void eat() {
		this.turn++;
		this.hp += 2;
		this.eatCnt++;
	}

	//�ڱ�: 3�ʵ��� �ῡ���. hp2 ����, �� 2����
	void sleep() {
		for (int i = 0; i < 3; i++) {
			System.out.println("zzZzzZ");

			try {
				Thread.sleep(1000);
			} catch (Exception e) {

			}
		}
		System.out.println("�ῡ�� ������ϴ�");
		this.hp -= 2;
		this.turn += 2;
	}
	//�뺯����: ���� 3�� ������ ����, ���� ��ġ��� 1�ϴ� hp1����
	void poop() {
		System.out.println("*���� �ô�");
		this.poo = true;
		this.eatCnt = 0;
	}
	//û���ϱ�: ������ ġ���.
	void cleanUp() {
		System.out.println("û�� ����");
		this.poo = false;
	}
	//���º���
	void printState() {
		System.out.println(this.turn+"����");
		System.out.println("�̸�: " + this.name);
		System.out.println("HP: " + this.hp);
	}

	public Creature(String name, int hp) {
		this.name = name;
		this.hp = hp;
	}
}

public class Game {
	public static void main(String[] args) {
		String title = "##########\n"
					 + "##�ٸ���ġ##\n"
					 + "#########";
		
		String mainMsg = "1. ĳ���ͼ���\n"
					   + "2. ����\n"
					   + "�Է� >>";
		
		String charMsg = "1. ��ī��\n"
				   	   + "2. ���̸�\n"
				   	   + "3. ���α�\n"
				   	   + "4. ���ư���\n"
				   	   + "�Է� >>";
		
		String gameMsg = "1. �Ա�\n"
					   	+ "2. �ڱ�\n"
					   	+ "3. û���ϱ�\n"
					   	+ "4. ����Ȯ��\n"
					   	+ "�Է� >>";
		
		Scanner sc = new Scanner(System.in);
		int choice = 0;
		int gameChoice = 0;
		
		System.out.println(title);
		
		while(true) {
			System.out.println(mainMsg);
			choice = sc.nextInt();
			if (choice == 2) {
				break;
			}
			System.out.println(charMsg);
			choice =sc.nextInt();
			if (choice == 4) {
				continue;
			}
			Creature[] creature = {
					new Creature("��īƩ", 3),
					new Creature("���̸�", 2),
					new Creature("���α�", 3),
			};
			while(true) {
				System.out.println(gameMsg);
				gameChoice = sc.nextInt();
				Creature myChar = creature[choice-1];
				
				switch(gameChoice) {
				case 1:
					myChar.eat();
					System.out.println("�ȳ�!!");
					break;
				case 2:
					myChar.cleanUp();
					break;
				case 3:
					myChar.cleanUp();
					break;
				case 4:
					myChar.printState();
					break;
				default:
					System.out.println("�߸��Է��߽��ϴ�");
				}
				if(myChar.eatCnt >= 3) {
					myChar.poop();
				}
				if(myChar.poo) {
					System.out.println("���� ġ�����մϴ�");
					myChar.hp--;
				}
				if(myChar.turn >= 10) {
					System.out.println("###########");
					myChar.printState();
					System.out.println("###########");
					System.out.println(myChar.hp >= 5 ? "���ǿ���" : "���ӿ���");
					break;
				}
			}
			//1. �Ա� 2. �ڱ� 3. û���ϱ� 4. ����Ȯ��
			
		}
		
		
	}
}