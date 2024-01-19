/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class OidcProviderController extends Controller {
  @service router;
  @tracked isEditRoute;

  constructor() {
    super(...arguments);
    this.router.on('routeDidChange', ({ targetName }) => {
      if (!targetName) {
        return (this.isEditRoute = false);
      }
      return (this.isEditRoute = targetName.includes('edit'));
    });
  }

  get showHeader() {
    // hide header when rendering the edit form
    return !this.isEditRoute;
  }
}
