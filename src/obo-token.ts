// https://www.terraform.io/docs/providers/databricks/r/obo_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OboTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/obo_token#application_id OboToken#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/obo_token#comment OboToken#comment}
  */
  readonly comment: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/obo_token#lifetime_seconds OboToken#lifetime_seconds}
  */
  readonly lifetimeSeconds: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/obo_token databricks_obo_token}
*/
export class OboToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_obo_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/obo_token databricks_obo_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OboTokenConfig
  */
  public constructor(scope: Construct, id: string, config: OboTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_obo_token',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '0.5.8',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationId = config.applicationId;
    this._comment = config.comment;
    this._lifetimeSeconds = config.lifetimeSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // comment - computed: false, optional: false, required: true
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifetime_seconds - computed: false, optional: false, required: true
  private _lifetimeSeconds?: number; 
  public get lifetimeSeconds() {
    return this.getNumberAttribute('lifetime_seconds');
  }
  public set lifetimeSeconds(value: number) {
    this._lifetimeSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeSecondsInput() {
    return this._lifetimeSeconds;
  }

  // token_value - computed: true, optional: false, required: false
  public get tokenValue() {
    return this.getStringAttribute('token_value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      comment: cdktf.stringToTerraform(this._comment),
      lifetime_seconds: cdktf.numberToTerraform(this._lifetimeSeconds),
    };
  }
}
