import { FC } from 'react';
import Section from '../../elements/Section/Section';
import GeneratePersistentForm from '../../forms/GeneratePersistentForm/GeneratePersistentForm';

interface Props {};

const RegisterPeristentFormPage: FC<Props> = () => {
  return (
    <Section 
      title="Nieuw formulier"
      subheader="Genereer een nieuw formulier"
      icon="home-smile-2-fill"
      divider={false}
    >
      <GeneratePersistentForm />
    </Section>
  )
}

export default RegisterPeristentFormPage;