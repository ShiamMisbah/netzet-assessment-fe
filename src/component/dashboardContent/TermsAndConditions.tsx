import React from 'react'

type Props = {}

const TermsAndConditions = (props: Props) => {
  return (
    <div className="mt-6 lg:mt-7 text-center lg:text-left text-[var(--textGray)] max-w-[281px] lg:max-w-full mx-auto lg:mx-0">
      <div className="text-[12px] mb-4 lg:mb-3" style={{ lineHeight: 1.2 }}>
        <h3>
          By clicking &#34;Get Started&#34;, you agree with Terms and
          Conditions, Privacy Policy, Subscription Terms
        </h3>
      </div>
      <div className="text-[10px]">
        <h3>Fametonic 2025 ©All Rights Reserved.</h3>
      </div>
    </div>
  );
}

export default TermsAndConditions