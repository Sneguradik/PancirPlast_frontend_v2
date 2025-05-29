"use client"
import styles from "./Contact.module.scss";
import {Input} from "@components/ui/input";
import {Tabs, TabsContent} from "@components/ui/tabs";
import {useState} from "react";
import {MdEmail} from "react-icons/md";
import {RiPhoneLine} from "react-icons/ri";
import {RadioGroup, RadioGroupItem} from "@components/ui/radio-group";
import {Textarea} from "@components/ui/textarea";
import {Button} from "@components/ui/button";
import {BsFillSendFill} from "react-icons/bs";
import {LuCircleCheckBig} from "react-icons/lu";
import {ContactFormType} from "@logic/Entities";
import {FaTelegramPlane} from "react-icons/fa";
import {toast} from "react-toastify";
import warn = toast.warn;
import {sendApplication} from "@logic/SendApplication";
import success = toast.success;

export default function ContactPage() {
  const [tab, setTab] = useState("contact")

  const [name, setName] = useState<string>("")
  const [surname, setSurname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [telegram, setTelegram] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [preferredContact, setPreferredContact] = useState<ContactFormType>(ContactFormType.Telegram)

  const send = () => {
    if (preferredContact == ContactFormType.Telegram && !telegram ||
      preferredContact == ContactFormType.Email && !email ||
      preferredContact == ContactFormType.Phone && !phone) {
      warn("Пожалуйста укажите ваш предпочитаемый контакт")
      return;
    }
    if (!name) return warn("Пожалуйста укажите имя");
    if (!surname) return warn("Пожалуйста укажите фамилию");
    if(!content) return warn("Пожалуйста не отправляйте пустую форму");
    sendApplication({
      name: name,
      surname: surname,
      email: email,
      telegram: telegram,
      phone: phone,
      content: content,
      preferredContact: preferredContact,
    }).then(result => {
      if (result) {
        setTab("result")
        success("Заявка отправлена!")
      }
      else{
        warn("Что-то пошло не так")
      }
    })
  }

  return(
    <Tabs className={styles.container} value={tab}>
      <TabsContent value={"contact"} className={styles.tab}>
        <div>
          <h2 className={"mulish"}>Свяжитесь с нами</h2>
          <p className={"text-primary roboto font-medium"}>Оставьте свои контакты и мы вам перезвоним</p>
        </div>
        <div className={"flex w-full gap-4"}>
          <div className={styles.input_container}>
            <label>Имя</label>
            <Input
              className={styles.input}
              placeholder={"Иван"}
              onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className={styles.input_container}>
            <label>Фамилия</label>
            <Input
              className={styles.input}
              placeholder={"Иванов"}
              onChange={(e) => setSurname(e.target.value)}/>
          </div>
        </div>

        <div className={"flex w-full gap-4 flex-col"}>
          <h4 className={"text-primary-foreground mulish"}>Форма связи</h4>
          <div className={styles.input_container}>
            <label><MdEmail />Почта</label>
            <Input
              
              placeholder={"ivan@example.com"}
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className={styles.input_container}>
            <label><FaTelegramPlane />Telegram</label>
            <Input

              placeholder={"@example"}
              type={"text"}
              onChange={(e) => setTelegram(e.target.value)}/>
          </div>
          <div className={styles.input_container}>
            <label><RiPhoneLine />Phone</label>
            <Input
              className={styles.input}
              placeholder={"+1 123-456-789"}
              onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <p className="mulish text-primary">Я предпочту, чтобы со мной связались через:</p>
          <RadioGroup
            defaultValue={"Telegram"}
            className={"flex  gap-5"}
            onValueChange={(value ) => {
              switch(value){
                case "Telegram":
                  setPreferredContact(ContactFormType.Telegram)
                  break;
                case "Phone":
                  setPreferredContact(ContactFormType.Phone)
                  break;
                case "Email":
                  setPreferredContact(ContactFormType.Email)
                  break;
              }
            }}>
            <div className={styles.radio_item}>
              <RadioGroupItem value={"Email"}/>
              <span>Email</span>
            </div>
            <div className={styles.radio_item}>
              <RadioGroupItem value={"Telegram"}/>
              <span>Telegram</span>
            </div>
            <div className={styles.radio_item}>
              <RadioGroupItem value={"Phone"}/>
              <span>Phone</span>
            </div>
          </RadioGroup>
        </div>
        <div className={"flex w-full gap-4 flex-col"}>
          <h4 className={"text-primary-foreground mulish"}>Ваш вопрос</h4>
          <div className={styles.input_container}>
            <label>Обращение</label>
            <Textarea
              className={styles.input}
              placeholder={"Напишите что-нибудь ..."}
              onChange={(e) => setContent(e.target.value)}/>
          </div>
        </div>
        <Button onClick={()=>send()}><BsFillSendFill /> Отправить обращение</Button>
      </TabsContent>

      <TabsContent value={"result"} className={styles.tab}>
        <div className={styles.success}>
          <LuCircleCheckBig />
          <h4 className={"mulish text-primary"}>Спасибо за обращение!</h4>
        </div>
      </TabsContent>


    </Tabs>
  )
}