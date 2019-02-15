import React from 'react'
import style from './index.module.css'

export const RegisterScreen = ({ registerUser }) => (
  <section>
    <div className={style.component}>
      <span role="img" aria-label="post">
        <svg viewBox="0 0 59 80">
          <g>
            <path d="M48.417 49.444L38.585 73.229 36.012 71.394 41.802 56.726 31.211 59.519C31.211 59.519 26.022 42.42 26.513 30.837 26.218 22.744 27.644 16.96 30.167 13.6 34.274 8.408 42.099 3.953 49.793 7.645 54.701 9.869 57.658 13.889 58.107 17.824 59.479 34.859 38.498 41.817 38.498 41.817L38.085 38.191C38.085 38.191 44.945 35.464 49.105 29.553 53.266 23.643 51.245 15.88 46.569 14.464 42.061 13.577 37.34 18.757 36.516 27.966 34.721 41.776 39.393 52.006 39.393 52.006L48.417 49.444M0 62.396L15.402 74.372 16.522 71.783 8.26 65.71 16.853 63.305C16.853 63.305 10.998 47.535 10.597 32.251 10.229 27.354 9.896 11.684 15.924 8.975 16.976 7.213 18.743 5.903 18.743 5.903 18.743 5.903 3.467 4.584 4.184 32.453 5.706 51.166 9.451 59.821 9.451 59.821L0 62.396" />
            <path d="M29.91,61.761 L38.969,59.263 L30.045,80 L11.998,66.538 L19.098,64.644 C19.098,64.644 3.276,20.694 21.128,5.095 C32.325,-3.789 43.164,3.999 42.965,4.872 C40.203,4.812 37.842,5.844 37.842,5.844 C37.842,5.844 31.789,3.265 27.475,12.503 C23.719,20.705 22.048,34.474 29.91,61.761" />
            <path d="M41.806,17.606 C42.599,24.356 38.244,27.206 38.244,27.206 L37.819,30.659 C37.819,30.659 47.709,25.549 45.669,15.819 C44.566,15.913 42.212,17.242 41.806,17.606" />
          </g>
        </svg>
      </span>
      <p>
        It looks like this is the first time using chat with this agent.
        Register a handle and avatar for this agent ID.
      </p>
      <form
      onSubmit={e => {
        e.preventDefault()

        const name = e.target[0].value
        const avatarURL = e.target[1].value

        if (name.length === 0) {
          return
        }
        registerUser({
          name,
          avatarURL,
        })
       }}
      >
        <input placeholder="input @handle"/>
        <br/>
        <input placeholder="paste url for avatar image"/>
        <br/>
        <button type="submit">
          Register!
        </button>
      </form>
    </div>
  </section>
)
