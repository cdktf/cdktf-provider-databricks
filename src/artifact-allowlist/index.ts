/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/resources/artifact_allowlist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArtifactAllowlistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/resources/artifact_allowlist#artifact_type ArtifactAllowlist#artifact_type}
  */
  readonly artifactType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/resources/artifact_allowlist#created_at ArtifactAllowlist#created_at}
  */
  readonly createdAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/resources/artifact_allowlist#created_by ArtifactAllowlist#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/resources/artifact_allowlist#id ArtifactAllowlist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/resources/artifact_allowlist#metastore_id ArtifactAllowlist#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * artifact_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/resources/artifact_allowlist#artifact_matcher ArtifactAllowlist#artifact_matcher}
  */
  readonly artifactMatcher: ArtifactAllowlistArtifactMatcher[] | cdktf.IResolvable;
}
export interface ArtifactAllowlistArtifactMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/resources/artifact_allowlist#artifact ArtifactAllowlist#artifact}
  */
  readonly artifact: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/resources/artifact_allowlist#match_type ArtifactAllowlist#match_type}
  */
  readonly matchType: string;
}

export function artifactAllowlistArtifactMatcherToTerraform(struct?: ArtifactAllowlistArtifactMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact: cdktf.stringToTerraform(struct!.artifact),
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function artifactAllowlistArtifactMatcherToHclTerraform(struct?: ArtifactAllowlistArtifactMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact: {
      value: cdktf.stringToHclTerraform(struct!.artifact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactAllowlistArtifactMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArtifactAllowlistArtifactMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifact !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifact = this._artifact;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactAllowlistArtifactMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifact = undefined;
      this._matchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifact = value.artifact;
      this._matchType = value.matchType;
    }
  }

  // artifact - computed: false, optional: false, required: true
  private _artifact?: string; 
  public get artifact() {
    return this.getStringAttribute('artifact');
  }
  public set artifact(value: string) {
    this._artifact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactInput() {
    return this._artifact;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }
}

export class ArtifactAllowlistArtifactMatcherList extends cdktf.ComplexList {
  public internalValue? : ArtifactAllowlistArtifactMatcher[] | cdktf.IResolvable

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
  public get(index: number): ArtifactAllowlistArtifactMatcherOutputReference {
    return new ArtifactAllowlistArtifactMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/resources/artifact_allowlist databricks_artifact_allowlist}
*/
export class ArtifactAllowlist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_artifact_allowlist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArtifactAllowlist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArtifactAllowlist to import
  * @param importFromId The id of the existing ArtifactAllowlist that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/resources/artifact_allowlist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArtifactAllowlist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_artifact_allowlist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.60.0/docs/resources/artifact_allowlist databricks_artifact_allowlist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArtifactAllowlistConfig
  */
  public constructor(scope: Construct, id: string, config: ArtifactAllowlistConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_artifact_allowlist',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.60.0',
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
    this._artifactType = config.artifactType;
    this._createdAt = config.createdAt;
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._metastoreId = config.metastoreId;
    this._artifactMatcher.internalValue = config.artifactMatcher;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_type - computed: false, optional: false, required: true
  private _artifactType?: string; 
  public get artifactType() {
    return this.getStringAttribute('artifact_type');
  }
  public set artifactType(value: string) {
    this._artifactType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactTypeInput() {
    return this._artifactType;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // metastore_id - computed: true, optional: true, required: false
  private _metastoreId?: string; 
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }
  public set metastoreId(value: string) {
    this._metastoreId = value;
  }
  public resetMetastoreId() {
    this._metastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreIdInput() {
    return this._metastoreId;
  }

  // artifact_matcher - computed: false, optional: false, required: true
  private _artifactMatcher = new ArtifactAllowlistArtifactMatcherList(this, "artifact_matcher", true);
  public get artifactMatcher() {
    return this._artifactMatcher;
  }
  public putArtifactMatcher(value: ArtifactAllowlistArtifactMatcher[] | cdktf.IResolvable) {
    this._artifactMatcher.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactMatcherInput() {
    return this._artifactMatcher.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_type: cdktf.stringToTerraform(this._artifactType),
      created_at: cdktf.numberToTerraform(this._createdAt),
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      metastore_id: cdktf.stringToTerraform(this._metastoreId),
      artifact_matcher: cdktf.listMapper(artifactAllowlistArtifactMatcherToTerraform, true)(this._artifactMatcher.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_type: {
        value: cdktf.stringToHclTerraform(this._artifactType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.numberToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metastore_id: {
        value: cdktf.stringToHclTerraform(this._metastoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifact_matcher: {
        value: cdktf.listMapperHcl(artifactAllowlistArtifactMatcherToHclTerraform, true)(this._artifactMatcher.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ArtifactAllowlistArtifactMatcherList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
