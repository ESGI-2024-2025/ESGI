
from random import randint

def main(des, number, precis=1) -> None:
    
    occ = 0 
    i = 0
    
    while i <= 1000 * precis:

        i+=1
        de = (randint(1,6) for _ in range(des))

        is_good_number = map(lambda x: x!=number,de)

        if not any(is_good_number):
            occ += 1

    return str(occ/precis)+"/1000"


if __name__ == "__main__":
    print(main(4,1,100))
