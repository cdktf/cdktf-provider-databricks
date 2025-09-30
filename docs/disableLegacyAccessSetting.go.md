# `disableLegacyAccessSetting` Submodule <a name="`disableLegacyAccessSetting` Submodule" id="@cdktf/provider-databricks.disableLegacyAccessSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisableLegacyAccessSetting <a name="DisableLegacyAccessSetting" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_access_setting databricks_disable_legacy_access_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/disablelegacyaccesssetting"

disablelegacyaccesssetting.NewDisableLegacyAccessSetting(scope Construct, id *string, config DisableLegacyAccessSettingConfig) DisableLegacyAccessSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig">DisableLegacyAccessSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig">DisableLegacyAccessSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.putDisableLegacyAccess">PutDisableLegacyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetSettingName">ResetSettingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDisableLegacyAccess` <a name="PutDisableLegacyAccess" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.putDisableLegacyAccess"></a>

```go
func PutDisableLegacyAccess(value DisableLegacyAccessSettingDisableLegacyAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.putDisableLegacyAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetId"></a>

```go
func ResetId()
```

##### `ResetSettingName` <a name="ResetSettingName" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.resetSettingName"></a>

```go
func ResetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DisableLegacyAccessSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/disablelegacyaccesssetting"

disablelegacyaccesssetting.DisableLegacyAccessSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/disablelegacyaccesssetting"

disablelegacyaccesssetting.DisableLegacyAccessSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/disablelegacyaccesssetting"

disablelegacyaccesssetting.DisableLegacyAccessSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/disablelegacyaccesssetting"

disablelegacyaccesssetting.DisableLegacyAccessSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DisableLegacyAccessSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DisableLegacyAccessSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DisableLegacyAccessSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_access_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DisableLegacyAccessSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.disableLegacyAccess">DisableLegacyAccess</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference">DisableLegacyAccessSettingDisableLegacyAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.disableLegacyAccessInput">DisableLegacyAccessInput</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.settingNameInput">SettingNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.settingName">SettingName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisableLegacyAccess`<sup>Required</sup> <a name="DisableLegacyAccess" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.disableLegacyAccess"></a>

```go
func DisableLegacyAccess() DisableLegacyAccessSettingDisableLegacyAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference">DisableLegacyAccessSettingDisableLegacyAccessOutputReference</a>

---

##### `DisableLegacyAccessInput`<sup>Optional</sup> <a name="DisableLegacyAccessInput" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.disableLegacyAccessInput"></a>

```go
func DisableLegacyAccessInput() DisableLegacyAccessSettingDisableLegacyAccess
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.settingNameInput"></a>

```go
func SettingNameInput() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.settingName"></a>

```go
func SettingName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DisableLegacyAccessSettingConfig <a name="DisableLegacyAccessSettingConfig" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/disablelegacyaccesssetting"

&disablelegacyaccesssetting.DisableLegacyAccessSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisableLegacyAccess: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess,
	Etag: *string,
	Id: *string,
	SettingName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.disableLegacyAccess">DisableLegacyAccess</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a></code> | disable_legacy_access block. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.etag">Etag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_access_setting#etag DisableLegacyAccessSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_access_setting#id DisableLegacyAccessSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.settingName">SettingName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_access_setting#setting_name DisableLegacyAccessSetting#setting_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisableLegacyAccess`<sup>Required</sup> <a name="DisableLegacyAccess" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.disableLegacyAccess"></a>

```go
DisableLegacyAccess DisableLegacyAccessSettingDisableLegacyAccess
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a>

disable_legacy_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_access_setting#disable_legacy_access DisableLegacyAccessSetting#disable_legacy_access}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_access_setting#etag DisableLegacyAccessSetting#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_access_setting#id DisableLegacyAccessSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SettingName`<sup>Optional</sup> <a name="SettingName" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingConfig.property.settingName"></a>

```go
SettingName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_access_setting#setting_name DisableLegacyAccessSetting#setting_name}.

---

### DisableLegacyAccessSettingDisableLegacyAccess <a name="DisableLegacyAccessSettingDisableLegacyAccess" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/disablelegacyaccesssetting"

&disablelegacyaccesssetting.DisableLegacyAccessSettingDisableLegacyAccess {
	Value: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess.property.value">Value</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_access_setting#value DisableLegacyAccessSetting#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess.property.value"></a>

```go
Value interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/disable_legacy_access_setting#value DisableLegacyAccessSetting#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisableLegacyAccessSettingDisableLegacyAccessOutputReference <a name="DisableLegacyAccessSettingDisableLegacyAccessOutputReference" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/disablelegacyaccesssetting"

disablelegacyaccesssetting.NewDisableLegacyAccessSettingDisableLegacyAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DisableLegacyAccessSettingDisableLegacyAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.value">Value</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.value"></a>

```go
func Value() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DisableLegacyAccessSettingDisableLegacyAccess
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyAccessSetting.DisableLegacyAccessSettingDisableLegacyAccess">DisableLegacyAccessSettingDisableLegacyAccess</a>

---



