import { useAuthModalStore } from '@/store/non-persisted/modal/useAuthModalStore';
import Modal from './UI/Modal';
import { useSignupStore } from './Auth/Signup';
import Auth from './Auth';

const GlobalModals = () => {
  const { authModalType, showAuthModal, setShowAuthModal } = useAuthModalStore();

  const { screen: signupScreen } = useSignupStore();

  const authModalTitle =
    authModalType === 'signup' ? (signupScreen === 'choose' ? 'Signup' : null) : 'Login';

  return (
    <>
      <Modal
        onClose={() => setShowAuthModal(false, authModalType)}
        show={showAuthModal}
        title={authModalTitle}
      >
        <Auth />
      </Modal>
    </>
  );
};

export default GlobalModals;
