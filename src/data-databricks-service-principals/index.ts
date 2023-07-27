/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/data-sources/service_principals
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksServicePrincipalsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/data-sources/service_principals#application_ids DataDatabricksServicePrincipals#application_ids}
  */
  readonly applicationIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/data-sources/service_principals#display_name_contains DataDatabricksServicePrincipals#display_name_contains}
  */
  readonly displayNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/data-sources/service_principals databricks_service_principals}
*/
export class DataDatabricksServicePrincipals extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_service_principals";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/data-sources/service_principals databricks_service_principals} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksServicePrincipalsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksServicePrincipalsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_service_principals',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.21.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationIds = config.applicationIds;
    this._displayNameContains = config.displayNameContains;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_ids - computed: true, optional: true, required: false
  private _applicationIds?: string[]; 
  public get applicationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('application_ids'));
  }
  public set applicationIds(value: string[]) {
    this._applicationIds = value;
  }
  public resetApplicationIds() {
    this._applicationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdsInput() {
    return this._applicationIds;
  }

  // display_name_contains - computed: true, optional: true, required: false
  private _displayNameContains?: string; 
  public get displayNameContains() {
    return this.getStringAttribute('display_name_contains');
  }
  public set displayNameContains(value: string) {
    this._displayNameContains = value;
  }
  public resetDisplayNameContains() {
    this._displayNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameContainsInput() {
    return this._displayNameContains;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationIds),
      display_name_contains: cdktf.stringToTerraform(this._displayNameContains),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
