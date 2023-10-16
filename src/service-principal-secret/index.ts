/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/service_principal_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicePrincipalSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/service_principal_secret#id ServicePrincipalSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/service_principal_secret#secret ServicePrincipalSecret#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/service_principal_secret#service_principal_id ServicePrincipalSecret#service_principal_id}
  */
  readonly servicePrincipalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/service_principal_secret#status ServicePrincipalSecret#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/service_principal_secret databricks_service_principal_secret}
*/
export class ServicePrincipalSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_service_principal_secret";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/service_principal_secret databricks_service_principal_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePrincipalSecretConfig
  */
  public constructor(scope: Construct, id: string, config: ServicePrincipalSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_service_principal_secret',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.28.0',
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
    this._id = config.id;
    this._secret = config.secret;
    this._servicePrincipalId = config.servicePrincipalId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // secret - computed: true, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // service_principal_id - computed: false, optional: false, required: true
  private _servicePrincipalId?: string; 
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }
  public set servicePrincipalId(value: string) {
    this._servicePrincipalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalIdInput() {
    return this._servicePrincipalId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      secret: cdktf.stringToTerraform(this._secret),
      service_principal_id: cdktf.stringToTerraform(this._servicePrincipalId),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
