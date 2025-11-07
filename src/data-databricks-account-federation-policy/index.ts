/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_federation_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksAccountFederationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_federation_policy#policy_id DataDatabricksAccountFederationPolicy#policy_id}
  */
  readonly policyId: string;
}
export interface DataDatabricksAccountFederationPolicyOidcPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_federation_policy#audiences DataDatabricksAccountFederationPolicy#audiences}
  */
  readonly audiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_federation_policy#issuer DataDatabricksAccountFederationPolicy#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_federation_policy#jwks_json DataDatabricksAccountFederationPolicy#jwks_json}
  */
  readonly jwksJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_federation_policy#jwks_uri DataDatabricksAccountFederationPolicy#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_federation_policy#subject DataDatabricksAccountFederationPolicy#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_federation_policy#subject_claim DataDatabricksAccountFederationPolicy#subject_claim}
  */
  readonly subjectClaim?: string;
}

export function dataDatabricksAccountFederationPolicyOidcPolicyToTerraform(struct?: DataDatabricksAccountFederationPolicyOidcPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    jwks_json: cdktf.stringToTerraform(struct!.jwksJson),
    jwks_uri: cdktf.stringToTerraform(struct!.jwksUri),
    subject: cdktf.stringToTerraform(struct!.subject),
    subject_claim: cdktf.stringToTerraform(struct!.subjectClaim),
  }
}


export function dataDatabricksAccountFederationPolicyOidcPolicyToHclTerraform(struct?: DataDatabricksAccountFederationPolicyOidcPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_json: {
      value: cdktf.stringToHclTerraform(struct!.jwksJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_uri: {
      value: cdktf.stringToHclTerraform(struct!.jwksUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_claim: {
      value: cdktf.stringToHclTerraform(struct!.subjectClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountFederationPolicyOidcPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountFederationPolicyOidcPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._jwksJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksJson = this._jwksJson;
    }
    if (this._jwksUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUri = this._jwksUri;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._subjectClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectClaim = this._subjectClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountFederationPolicyOidcPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audiences = undefined;
      this._issuer = undefined;
      this._jwksJson = undefined;
      this._jwksUri = undefined;
      this._subject = undefined;
      this._subjectClaim = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audiences = value.audiences;
      this._issuer = value.issuer;
      this._jwksJson = value.jwksJson;
      this._jwksUri = value.jwksUri;
      this._subject = value.subject;
      this._subjectClaim = value.subjectClaim;
    }
  }

  // audiences - computed: true, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwks_json - computed: true, optional: true, required: false
  private _jwksJson?: string; 
  public get jwksJson() {
    return this.getStringAttribute('jwks_json');
  }
  public set jwksJson(value: string) {
    this._jwksJson = value;
  }
  public resetJwksJson() {
    this._jwksJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksJsonInput() {
    return this._jwksJson;
  }

  // jwks_uri - computed: true, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // subject - computed: true, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // subject_claim - computed: true, optional: true, required: false
  private _subjectClaim?: string; 
  public get subjectClaim() {
    return this.getStringAttribute('subject_claim');
  }
  public set subjectClaim(value: string) {
    this._subjectClaim = value;
  }
  public resetSubjectClaim() {
    this._subjectClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectClaimInput() {
    return this._subjectClaim;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_federation_policy databricks_account_federation_policy}
*/
export class DataDatabricksAccountFederationPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_account_federation_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksAccountFederationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAccountFederationPolicy to import
  * @param importFromId The id of the existing DataDatabricksAccountFederationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_federation_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAccountFederationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_account_federation_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_federation_policy databricks_account_federation_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAccountFederationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAccountFederationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_account_federation_policy',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.97.0',
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
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oidc_policy - computed: true, optional: false, required: false
  private _oidcPolicy = new DataDatabricksAccountFederationPolicyOidcPolicyOutputReference(this, "oidc_policy");
  public get oidcPolicy() {
    return this._oidcPolicy;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // service_principal_id - computed: true, optional: false, required: false
  public get servicePrincipalId() {
    return this.getNumberAttribute('service_principal_id');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_id: cdktf.stringToTerraform(this._policyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
