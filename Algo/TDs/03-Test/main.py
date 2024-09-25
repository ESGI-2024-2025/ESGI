
def main() -> bool:
    
    year = input("Entrez votre année à tester: ")

    while not year.isdigit():
        year = input("Entrez votre année à tester: ")
    
    year = int(year)

    if not year%4 and year%100:
        return True
    
    elif not year%400:
        return True
    
    else:
        return False

if __name__ == "__main__":
    print(main())
