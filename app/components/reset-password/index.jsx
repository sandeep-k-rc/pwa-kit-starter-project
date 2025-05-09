/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'
import {Alert, Button, Stack, Text} from '@salesforce/retail-react-app/app/components/shared/ui'
import {AlertIcon, BrandLogo} from '@salesforce/retail-react-app/app/components/icons'
import {noop} from '@salesforce/retail-react-app/app/utils/utils'
import ResetPasswordFields from '@salesforce/retail-react-app/app/components/forms/reset-password-fields'

const ResetPasswordForm = ({submitForm, clickSignIn = noop, form}) => {
    return (
        <Fragment>
            {!form.formState.isSubmitSuccessful ? (
                <>
                    <Stack justify="center" align="center" spacing={8}>
                        <BrandLogo width="60px" height="auto" />
                        <Stack spacing={2}>
                            <Text align="center" fontSize="xl" fontWeight="semibold">
                                <FormattedMessage
                                    defaultMessage="Reset Password"
                                    id="reset_password_form.title.reset_password"
                                />
                            </Text>
                            <Text fontSize="sm" align="center" color="gray.700">
                                <FormattedMessage
                                    defaultMessage="Enter your email to receive instructions on how to reset your password"
                                    id="reset_password_form.message.enter_your_email"
                                />
                            </Text>
                        </Stack>
                    </Stack>
                    <form onSubmit={form.handleSubmit(submitForm)} data-testid="sf-auth-modal-form">
                        <Stack paddingTop={8} spacing={8} paddingLeft={4} paddingRight={4}>
                            {form.formState.errors?.global && (
                                <Alert status="error">
                                    <AlertIcon color="red.500" boxSize={4} />
                                    <Text fontSize="sm" ml={3}>
                                        {form.formState.errors.global.message}
                                    </Text>
                                </Alert>
                            )}
                            <ResetPasswordFields form={form} />
                            <Stack spacing={6}>
                                <Button
                                    type="submit"
                                    onClick={() => form.clearErrors('global')}
                                    isLoading={form.formState.isSubmitting}
                                >
                                    <FormattedMessage
                                        defaultMessage="Reset Password"
                                        id="reset_password_form.button.reset_password"
                                    />
                                </Button>

                                <Stack direction="row" spacing={1} justify="center">
                                    <Text fontSize="sm">
                                        <FormattedMessage
                                            defaultMessage="Or return to"
                                            id="reset_password_form.message.return_to_sign_in"
                                            description="Precedes link to return to sign in"
                                        />
                                    </Text>
                                    <Button variant="link" size="sm" onClick={clickSignIn}>
                                        <FormattedMessage
                                            defaultMessage="Sign in"
                                            id="reset_password_form.action.sign_in"
                                        />
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </form>
                </>
            ) : (
                <Stack justify="center" align="center" spacing={6}>
                    <BrandLogo width="60px" height="auto" />
                    <Text align="center" fontSize="xl" fontWeight="semibold">
                        <FormattedMessage
                            defaultMessage={'Password Reset'}
                            id="auth_modal.password_reset_success.title.password_reset"
                        />
                    </Text>
                    <Stack spacing={6} pt={4}>
                        <Text align="center" fontSize="sm">
                            <FormattedMessage
                                defaultMessage="You will receive an email at <b>{email}</b> with a link to reset your password shortly."
                                id="auth_modal.password_reset_success.info.will_email_shortly"
                                values={{
                                    email: form.getValues('email'),

                                    b: (chunks) => <b>{chunks}</b>
                                }}
                            />
                        </Text>

                        <Button onClick={clickSignIn}>
                            <FormattedMessage
                                defaultMessage="Back to Sign In"
                                id="auth_modal.password_reset_success.button.back_to_sign_in"
                            />
                        </Button>
                    </Stack>
                </Stack>
            )}
        </Fragment>
    )
}

ResetPasswordForm.propTypes = {
    submitForm: PropTypes.func,
    clickSignIn: PropTypes.func,
    form: PropTypes.object
}

export default ResetPasswordForm
