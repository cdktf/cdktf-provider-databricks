# `complianceSecurityProfileWorkspaceSetting` Submodule <a name="`complianceSecurityProfileWorkspaceSetting` Submodule" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComplianceSecurityProfileWorkspaceSetting <a name="ComplianceSecurityProfileWorkspaceSetting" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/compliance_security_profile_workspace_setting databricks_compliance_security_profile_workspace_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/compliancesecurityprofileworkspacesetting"

compliancesecurityprofileworkspacesetting.NewComplianceSecurityProfileWorkspaceSetting(scope Construct, id *string, config ComplianceSecurityProfileWorkspaceSettingConfig) ComplianceSecurityProfileWorkspaceSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig">ComplianceSecurityProfileWorkspaceSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig">ComplianceSecurityProfileWorkspaceSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putComplianceSecurityProfileWorkspace">PutComplianceSecurityProfileWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetSettingName">ResetSettingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComplianceSecurityProfileWorkspace` <a name="PutComplianceSecurityProfileWorkspace" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putComplianceSecurityProfileWorkspace"></a>

```go
func PutComplianceSecurityProfileWorkspace(value ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putComplianceSecurityProfileWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetId"></a>

```go
func ResetId()
```

##### `ResetSettingName` <a name="ResetSettingName" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetSettingName"></a>

```go
func ResetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComplianceSecurityProfileWorkspaceSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/compliancesecurityprofileworkspacesetting"

compliancesecurityprofileworkspacesetting.ComplianceSecurityProfileWorkspaceSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/compliancesecurityprofileworkspacesetting"

compliancesecurityprofileworkspacesetting.ComplianceSecurityProfileWorkspaceSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/compliancesecurityprofileworkspacesetting"

compliancesecurityprofileworkspacesetting.ComplianceSecurityProfileWorkspaceSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/compliancesecurityprofileworkspacesetting"

compliancesecurityprofileworkspacesetting.ComplianceSecurityProfileWorkspaceSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComplianceSecurityProfileWorkspaceSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComplianceSecurityProfileWorkspaceSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComplianceSecurityProfileWorkspaceSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/compliance_security_profile_workspace_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComplianceSecurityProfileWorkspaceSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspaceInput">ComplianceSecurityProfileWorkspaceInput</a></code> | <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingNameInput">SettingNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingName">SettingName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComplianceSecurityProfileWorkspace`<sup>Required</sup> <a name="ComplianceSecurityProfileWorkspace" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspace"></a>

```go
func ComplianceSecurityProfileWorkspace() ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference</a>

---

##### `ComplianceSecurityProfileWorkspaceInput`<sup>Optional</sup> <a name="ComplianceSecurityProfileWorkspaceInput" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspaceInput"></a>

```go
func ComplianceSecurityProfileWorkspaceInput() ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingNameInput"></a>

```go
func SettingNameInput() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingName"></a>

```go
func SettingName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace <a name="ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/compliancesecurityprofileworkspacesetting"

&compliancesecurityprofileworkspacesetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace {
	ComplianceStandards: *[]*string,
	IsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.complianceStandards">ComplianceStandards</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/compliance_security_profile_workspace_setting#compliance_standards ComplianceSecurityProfileWorkspaceSetting#compliance_standards}. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/compliance_security_profile_workspace_setting#is_enabled ComplianceSecurityProfileWorkspaceSetting#is_enabled}. |

---

##### `ComplianceStandards`<sup>Optional</sup> <a name="ComplianceStandards" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.complianceStandards"></a>

```go
ComplianceStandards *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/compliance_security_profile_workspace_setting#compliance_standards ComplianceSecurityProfileWorkspaceSetting#compliance_standards}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/compliance_security_profile_workspace_setting#is_enabled ComplianceSecurityProfileWorkspaceSetting#is_enabled}.

---

### ComplianceSecurityProfileWorkspaceSettingConfig <a name="ComplianceSecurityProfileWorkspaceSettingConfig" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/compliancesecurityprofileworkspacesetting"

&compliancesecurityprofileworkspacesetting.ComplianceSecurityProfileWorkspaceSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ComplianceSecurityProfileWorkspace: github.com/cdktf/cdktf-provider-databricks-go/databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace,
	Etag: *string,
	Id: *string,
	SettingName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.complianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a></code> | compliance_security_profile_workspace block. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.etag">Etag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/compliance_security_profile_workspace_setting#etag ComplianceSecurityProfileWorkspaceSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/compliance_security_profile_workspace_setting#id ComplianceSecurityProfileWorkspaceSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.settingName">SettingName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/compliance_security_profile_workspace_setting#setting_name ComplianceSecurityProfileWorkspaceSetting#setting_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComplianceSecurityProfileWorkspace`<sup>Required</sup> <a name="ComplianceSecurityProfileWorkspace" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.complianceSecurityProfileWorkspace"></a>

```go
ComplianceSecurityProfileWorkspace ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

compliance_security_profile_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/compliance_security_profile_workspace_setting#compliance_security_profile_workspace ComplianceSecurityProfileWorkspaceSetting#compliance_security_profile_workspace}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/compliance_security_profile_workspace_setting#etag ComplianceSecurityProfileWorkspaceSetting#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/compliance_security_profile_workspace_setting#id ComplianceSecurityProfileWorkspaceSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SettingName`<sup>Optional</sup> <a name="SettingName" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.settingName"></a>

```go
SettingName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/compliance_security_profile_workspace_setting#setting_name ComplianceSecurityProfileWorkspaceSetting#setting_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference <a name="ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/compliancesecurityprofileworkspacesetting"

compliancesecurityprofileworkspacesetting.NewComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resetComplianceStandards">ResetComplianceStandards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComplianceStandards` <a name="ResetComplianceStandards" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resetComplianceStandards"></a>

```go
func ResetComplianceStandards()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandardsInput">ComplianceStandardsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandards">ComplianceStandards</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComplianceStandardsInput`<sup>Optional</sup> <a name="ComplianceStandardsInput" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandardsInput"></a>

```go
func ComplianceStandardsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ComplianceStandards`<sup>Required</sup> <a name="ComplianceStandards" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandards"></a>

```go
func ComplianceStandards() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.internalValue"></a>

```go
func InternalValue() ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

---


