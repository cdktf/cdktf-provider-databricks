# `aibiDashboardEmbeddingAccessPolicySetting` Submodule <a name="`aibiDashboardEmbeddingAccessPolicySetting` Submodule" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AibiDashboardEmbeddingAccessPolicySetting <a name="AibiDashboardEmbeddingAccessPolicySetting" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/aibi_dashboard_embedding_access_policy_setting databricks_aibi_dashboard_embedding_access_policy_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/aibidashboardembeddingaccesspolicysetting"

aibidashboardembeddingaccesspolicysetting.NewAibiDashboardEmbeddingAccessPolicySetting(scope Construct, id *string, config AibiDashboardEmbeddingAccessPolicySettingConfig) AibiDashboardEmbeddingAccessPolicySetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig">AibiDashboardEmbeddingAccessPolicySettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig">AibiDashboardEmbeddingAccessPolicySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.putAibiDashboardEmbeddingAccessPolicy">PutAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetSettingName">ResetSettingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAibiDashboardEmbeddingAccessPolicy` <a name="PutAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.putAibiDashboardEmbeddingAccessPolicy"></a>

```go
func PutAibiDashboardEmbeddingAccessPolicy(value AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.putAibiDashboardEmbeddingAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetId"></a>

```go
func ResetId()
```

##### `ResetSettingName` <a name="ResetSettingName" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.resetSettingName"></a>

```go
func ResetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AibiDashboardEmbeddingAccessPolicySetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/aibidashboardembeddingaccesspolicysetting"

aibidashboardembeddingaccesspolicysetting.AibiDashboardEmbeddingAccessPolicySetting_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/aibidashboardembeddingaccesspolicysetting"

aibidashboardembeddingaccesspolicysetting.AibiDashboardEmbeddingAccessPolicySetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/aibidashboardembeddingaccesspolicysetting"

aibidashboardembeddingaccesspolicysetting.AibiDashboardEmbeddingAccessPolicySetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/aibidashboardembeddingaccesspolicysetting"

aibidashboardembeddingaccesspolicysetting.AibiDashboardEmbeddingAccessPolicySetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AibiDashboardEmbeddingAccessPolicySetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AibiDashboardEmbeddingAccessPolicySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AibiDashboardEmbeddingAccessPolicySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AibiDashboardEmbeddingAccessPolicySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.aibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.aibiDashboardEmbeddingAccessPolicyInput">AibiDashboardEmbeddingAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.settingNameInput">SettingNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.settingName">SettingName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AibiDashboardEmbeddingAccessPolicy`<sup>Required</sup> <a name="AibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.aibiDashboardEmbeddingAccessPolicy"></a>

```go
func AibiDashboardEmbeddingAccessPolicy() AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `AibiDashboardEmbeddingAccessPolicyInput`<sup>Optional</sup> <a name="AibiDashboardEmbeddingAccessPolicyInput" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.aibiDashboardEmbeddingAccessPolicyInput"></a>

```go
func AibiDashboardEmbeddingAccessPolicyInput() AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.settingNameInput"></a>

```go
func SettingNameInput() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.settingName"></a>

```go
func SettingName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy <a name="AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/aibidashboardembeddingaccesspolicysetting"

&aibidashboardembeddingaccesspolicysetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy {
	AccessPolicyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">AccessPolicyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#access_policy_type AibiDashboardEmbeddingAccessPolicySetting#access_policy_type}. |

---

##### `AccessPolicyType`<sup>Required</sup> <a name="AccessPolicyType" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```go
AccessPolicyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#access_policy_type AibiDashboardEmbeddingAccessPolicySetting#access_policy_type}.

---

### AibiDashboardEmbeddingAccessPolicySettingConfig <a name="AibiDashboardEmbeddingAccessPolicySettingConfig" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/aibidashboardembeddingaccesspolicysetting"

&aibidashboardembeddingaccesspolicysetting.AibiDashboardEmbeddingAccessPolicySettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AibiDashboardEmbeddingAccessPolicy: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy,
	Etag: *string,
	Id: *string,
	SettingName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.aibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy</a></code> | aibi_dashboard_embedding_access_policy block. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.etag">Etag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#etag AibiDashboardEmbeddingAccessPolicySetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#id AibiDashboardEmbeddingAccessPolicySetting#id}. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.settingName">SettingName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#setting_name AibiDashboardEmbeddingAccessPolicySetting#setting_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AibiDashboardEmbeddingAccessPolicy`<sup>Required</sup> <a name="AibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.aibiDashboardEmbeddingAccessPolicy"></a>

```go
AibiDashboardEmbeddingAccessPolicy AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy</a>

aibi_dashboard_embedding_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#aibi_dashboard_embedding_access_policy AibiDashboardEmbeddingAccessPolicySetting#aibi_dashboard_embedding_access_policy}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#etag AibiDashboardEmbeddingAccessPolicySetting#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#id AibiDashboardEmbeddingAccessPolicySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SettingName`<sup>Optional</sup> <a name="SettingName" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingConfig.property.settingName"></a>

```go
SettingName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/aibi_dashboard_embedding_access_policy_setting#setting_name AibiDashboardEmbeddingAccessPolicySetting#setting_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference <a name="AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/aibidashboardembeddingaccesspolicysetting"

aibidashboardembeddingaccesspolicysetting.NewAibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">AccessPolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">AccessPolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessPolicyTypeInput`<sup>Optional</sup> <a name="AccessPolicyTypeInput" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```go
func AccessPolicyTypeInput() *string
```

- *Type:* *string

---

##### `AccessPolicyType`<sup>Required</sup> <a name="AccessPolicyType" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```go
func AccessPolicyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.aibiDashboardEmbeddingAccessPolicySetting.AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicySettingAibiDashboardEmbeddingAccessPolicy</a>

---



