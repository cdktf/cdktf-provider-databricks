/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_federation_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksAccountFederationPoliciesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_federation_policies#audiences DataDatabricksAccountFederationPolicies#audiences}
  */
  readonly audiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_federation_policies#issuer DataDatabricksAccountFederationPolicies#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_federation_policies#jwks_json DataDatabricksAccountFederationPolicies#jwks_json}
  */
  readonly jwksJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_federation_policies#jwks_uri DataDatabricksAccountFederationPolicies#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_federation_policies#subject DataDatabricksAccountFederationPolicies#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_federation_policies#subject_claim DataDatabricksAccountFederationPolicies#subject_claim}
  */
  readonly subjectClaim?: string;
}

export function dataDatabricksAccountFederationPoliciesPoliciesOidcPolicyToTerraform(struct?: DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy | cdktf.IResolvable): any {
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


export function dataDatabricksAccountFederationPoliciesPoliciesOidcPolicyToHclTerraform(struct?: DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy | cdktf.IResolvable): any {
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

export class DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
      this._issuer = undefined;
      this._jwksJson = undefined;
      this._jwksUri = undefined;
      this._subject = undefined;
      this._subjectClaim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface DataDatabricksAccountFederationPoliciesPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_federation_policies#description DataDatabricksAccountFederationPolicies#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_federation_policies#oidc_policy DataDatabricksAccountFederationPolicies#oidc_policy}
  */
  readonly oidcPolicy?: DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_federation_policies#policy_id DataDatabricksAccountFederationPolicies#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_federation_policies#service_principal_id DataDatabricksAccountFederationPolicies#service_principal_id}
  */
  readonly servicePrincipalId?: number;
}

export function dataDatabricksAccountFederationPoliciesPoliciesToTerraform(struct?: DataDatabricksAccountFederationPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    oidc_policy: dataDatabricksAccountFederationPoliciesPoliciesOidcPolicyToTerraform(struct!.oidcPolicy),
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    service_principal_id: cdktf.numberToTerraform(struct!.servicePrincipalId),
  }
}


export function dataDatabricksAccountFederationPoliciesPoliciesToHclTerraform(struct?: DataDatabricksAccountFederationPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_policy: {
      value: dataDatabricksAccountFederationPoliciesPoliciesOidcPolicyToHclTerraform(struct!.oidcPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy",
    },
    policy_id: {
      value: cdktf.stringToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_principal_id: {
      value: cdktf.numberToHclTerraform(struct!.servicePrincipalId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountFederationPoliciesPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksAccountFederationPoliciesPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._oidcPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcPolicy = this._oidcPolicy?.internalValue;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._servicePrincipalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalId = this._servicePrincipalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountFederationPoliciesPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._oidcPolicy.internalValue = undefined;
      this._policyId = undefined;
      this._servicePrincipalId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._oidcPolicy.internalValue = value.oidcPolicy;
      this._policyId = value.policyId;
      this._servicePrincipalId = value.servicePrincipalId;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oidc_policy - computed: true, optional: true, required: false
  private _oidcPolicy = new DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference(this, "oidc_policy");
  public get oidcPolicy() {
    return this._oidcPolicy;
  }
  public putOidcPolicy(value: DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy) {
    this._oidcPolicy.internalValue = value;
  }
  public resetOidcPolicy() {
    this._oidcPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcPolicyInput() {
    return this._oidcPolicy.internalValue;
  }

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // service_principal_id - computed: true, optional: true, required: false
  private _servicePrincipalId?: number; 
  public get servicePrincipalId() {
    return this.getNumberAttribute('service_principal_id');
  }
  public set servicePrincipalId(value: number) {
    this._servicePrincipalId = value;
  }
  public resetServicePrincipalId() {
    this._servicePrincipalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalIdInput() {
    return this._servicePrincipalId;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataDatabricksAccountFederationPoliciesPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksAccountFederationPoliciesPolicies[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksAccountFederationPoliciesPoliciesOutputReference {
    return new DataDatabricksAccountFederationPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_federation_policies databricks_account_federation_policies}
*/
export class DataDatabricksAccountFederationPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_account_federation_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksAccountFederationPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAccountFederationPolicies to import
  * @param importFromId The id of the existing DataDatabricksAccountFederationPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_federation_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAccountFederationPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_account_federation_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/account_federation_policies databricks_account_federation_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAccountFederationPoliciesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAccountFederationPoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_account_federation_policies',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.91.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // policies - computed: true, optional: false, required: false
  private _policies = new DataDatabricksAccountFederationPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
