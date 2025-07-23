def yoshni_tanlash():
    # Lug'at yaratamiz
    foydalanuvchilar = {"katta_yosh": {}, "kichik_yosh": {}}

    # Foydalanuvchidan 5 ta odamning ismi va yoshini kiritishni so'raymiz
    for i in range(5):
        ism = input(f"{i+1}-odamning ismini kiriting: ")    
        yosh = int(input(f"{ism}ning yoshini kiriting: "))

        # Agar yosh 18 va undan katta bo'lsa, "katta yosh" guruhiga qo'shamiz
        if yosh >= 18:
            foydalanuvchilar["katta_yosh"][ism] = yosh
            print(f"{ism} katta yoshdagi shaxs.")
        else:
            # Agar yosh 18 dan kichik bo'lsa, "kichik yosh" guruhiga qo'shamiz
            foydalanuvchilar["kichik_yosh"][ism] = yosh
            print(f"{ism} kichik yoshdagi shaxs.")
    # "katta yosh" guruhidagi shaxslarni while tsikli yordamida chiqaramiz
    print("\nKatta yoshdagi shaxslar:")
    i = 0
    while i < len(foydalanuvchilar["katta_yosh"]):
        ism = list(foydalanuvchilar["katta_yosh"].keys())[i]
        yosh = foydalanuvchilar["katta_yosh"][ism]
        print(f"Ism: {ism}, Yosh: {yosh}")
        i += 1

    # "kichik yosh" guruhidagi shaxslarni for tsikli yordamida chiqaramiz
    print("\nKichik yoshdagi shaxslar:")
    for ism, yosh in foydalanuvchilar["kichik_yosh"].items():
        print(f"Ism: {ism}, Yosh: {yosh}")

# Funksiyani chaqiramiz
yoshni_tanlash()