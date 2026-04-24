<template>
  <v-main class="auth-layout">
    <v-container class="fill-height" fluid>
      <v-row class="h-full" no-gutters>
        <v-col class="d-flex align-center" cols="12" lg="6">
          <div class="auth-panel mx-auto w-full max-w-130 px-6 py-8">
            <div class="mb-6 flex items-center justify-between">
              <v-btn class="font-heading text-none" to="/" variant="text">
                Vuetify Template
              </v-btn>

              <div class="flex items-center gap-2">
                <ThemeToggle />
                <LocaleSwitcher />
              </div>
            </div>

            <router-view />
          </div>
        </v-col>

        <v-col class="hidden lg:flex auth-visual" cols="12" lg="6">
          <div class="auth-visual-inner">
            <h2 class="text-4xl font-heading mb-4">Welcome Back</h2>
            <p class="text-body-1 text-medium-emphasis max-w-130">
              Secure authentication space for login, sign up, and password
              recovery.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>
.auth-layout {
  min-height: 100vh;
}

.auth-panel {
  width: 100%;
}

.auth-visual {
  border-radius: 24px;
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(119, 95, 255, 0.32),
      transparent 45%
    ),
    radial-gradient(
      circle at 80% 40%,
      rgba(0, 191, 165, 0.28),
      transparent 40%
    ),
    linear-gradient(135deg, #0f1120 0%, #161a2b 60%, #1f2540 100%);
}

.auth-visual-inner {
  margin: auto;
  padding: 2rem;
  color: rgb(var(--v-theme-on-dark));
}
</style>
