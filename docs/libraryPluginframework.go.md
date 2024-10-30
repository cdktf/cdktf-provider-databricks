# `libraryPluginframework` Submodule <a name="`libraryPluginframework` Submodule" id="@cdktf/provider-databricks.libraryPluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LibraryPluginframework <a name="LibraryPluginframework" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework databricks_library_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/librarypluginframework"

librarypluginframework.NewLibraryPluginframework(scope Construct, id *string, config LibraryPluginframeworkConfig) LibraryPluginframework
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig">LibraryPluginframeworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig">LibraryPluginframeworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putCran">PutCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putMaven">PutMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putPypi">PutPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetCran">ResetCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetEgg">ResetEgg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetJar">ResetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetMaven">ResetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetPypi">ResetPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetRequirements">ResetRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetWhl">ResetWhl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCran` <a name="PutCran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putCran"></a>

```go
func PutCran(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putCran.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMaven` <a name="PutMaven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putMaven"></a>

```go
func PutMaven(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putMaven.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPypi` <a name="PutPypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putPypi"></a>

```go
func PutPypi(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putPypi.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCran` <a name="ResetCran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetCran"></a>

```go
func ResetCran()
```

##### `ResetEgg` <a name="ResetEgg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetEgg"></a>

```go
func ResetEgg()
```

##### `ResetJar` <a name="ResetJar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetJar"></a>

```go
func ResetJar()
```

##### `ResetMaven` <a name="ResetMaven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetMaven"></a>

```go
func ResetMaven()
```

##### `ResetPypi` <a name="ResetPypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetPypi"></a>

```go
func ResetPypi()
```

##### `ResetRequirements` <a name="ResetRequirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetRequirements"></a>

```go
func ResetRequirements()
```

##### `ResetWhl` <a name="ResetWhl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetWhl"></a>

```go
func ResetWhl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LibraryPluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/librarypluginframework"

librarypluginframework.LibraryPluginframework_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/librarypluginframework"

librarypluginframework.LibraryPluginframework_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/librarypluginframework"

librarypluginframework.LibraryPluginframework_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/librarypluginframework"

librarypluginframework.LibraryPluginframework_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LibraryPluginframework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LibraryPluginframework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LibraryPluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LibraryPluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cran">Cran</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList">LibraryPluginframeworkCranList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList">LibraryPluginframeworkMavenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypi">Pypi</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList">LibraryPluginframeworkPypiList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cranInput">CranInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.eggInput">EggInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jarInput">JarInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.mavenInput">MavenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypiInput">PypiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirementsInput">RequirementsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whlInput">WhlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.egg">Egg</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jar">Jar</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirements">Requirements</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whl">Whl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cran`<sup>Required</sup> <a name="Cran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cran"></a>

```go
func Cran() LibraryPluginframeworkCranList
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList">LibraryPluginframeworkCranList</a>

---

##### `Maven`<sup>Required</sup> <a name="Maven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.maven"></a>

```go
func Maven() LibraryPluginframeworkMavenList
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList">LibraryPluginframeworkMavenList</a>

---

##### `Pypi`<sup>Required</sup> <a name="Pypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypi"></a>

```go
func Pypi() LibraryPluginframeworkPypiList
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList">LibraryPluginframeworkPypiList</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `CranInput`<sup>Optional</sup> <a name="CranInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cranInput"></a>

```go
func CranInput() interface{}
```

- *Type:* interface{}

---

##### `EggInput`<sup>Optional</sup> <a name="EggInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.eggInput"></a>

```go
func EggInput() *string
```

- *Type:* *string

---

##### `JarInput`<sup>Optional</sup> <a name="JarInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jarInput"></a>

```go
func JarInput() *string
```

- *Type:* *string

---

##### `MavenInput`<sup>Optional</sup> <a name="MavenInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.mavenInput"></a>

```go
func MavenInput() interface{}
```

- *Type:* interface{}

---

##### `PypiInput`<sup>Optional</sup> <a name="PypiInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypiInput"></a>

```go
func PypiInput() interface{}
```

- *Type:* interface{}

---

##### `RequirementsInput`<sup>Optional</sup> <a name="RequirementsInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirementsInput"></a>

```go
func RequirementsInput() *string
```

- *Type:* *string

---

##### `WhlInput`<sup>Optional</sup> <a name="WhlInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whlInput"></a>

```go
func WhlInput() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Egg`<sup>Required</sup> <a name="Egg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.egg"></a>

```go
func Egg() *string
```

- *Type:* *string

---

##### `Jar`<sup>Required</sup> <a name="Jar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jar"></a>

```go
func Jar() *string
```

- *Type:* *string

---

##### `Requirements`<sup>Required</sup> <a name="Requirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirements"></a>

```go
func Requirements() *string
```

- *Type:* *string

---

##### `Whl`<sup>Required</sup> <a name="Whl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whl"></a>

```go
func Whl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LibraryPluginframeworkConfig <a name="LibraryPluginframeworkConfig" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/librarypluginframework"

&librarypluginframework.LibraryPluginframeworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	Cran: interface{},
	Egg: *string,
	Jar: *string,
	Maven: interface{},
	Pypi: interface{},
	Requirements: *string,
	Whl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#cluster_id LibraryPluginframework#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.cran">Cran</a></code> | <code>interface{}</code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.egg">Egg</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#egg LibraryPluginframework#egg}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.jar">Jar</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#jar LibraryPluginframework#jar}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.maven">Maven</a></code> | <code>interface{}</code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.pypi">Pypi</a></code> | <code>interface{}</code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.requirements">Requirements</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#requirements LibraryPluginframework#requirements}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.whl">Whl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#whl LibraryPluginframework#whl}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#cluster_id LibraryPluginframework#cluster_id}.

---

##### `Cran`<sup>Optional</sup> <a name="Cran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.cran"></a>

```go
Cran interface{}
```

- *Type:* interface{}

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#cran LibraryPluginframework#cran}

---

##### `Egg`<sup>Optional</sup> <a name="Egg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.egg"></a>

```go
Egg *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#egg LibraryPluginframework#egg}.

---

##### `Jar`<sup>Optional</sup> <a name="Jar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.jar"></a>

```go
Jar *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#jar LibraryPluginframework#jar}.

---

##### `Maven`<sup>Optional</sup> <a name="Maven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.maven"></a>

```go
Maven interface{}
```

- *Type:* interface{}

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#maven LibraryPluginframework#maven}

---

##### `Pypi`<sup>Optional</sup> <a name="Pypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.pypi"></a>

```go
Pypi interface{}
```

- *Type:* interface{}

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#pypi LibraryPluginframework#pypi}

---

##### `Requirements`<sup>Optional</sup> <a name="Requirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.requirements"></a>

```go
Requirements *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#requirements LibraryPluginframework#requirements}.

---

##### `Whl`<sup>Optional</sup> <a name="Whl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.whl"></a>

```go
Whl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#whl LibraryPluginframework#whl}.

---

### LibraryPluginframeworkCran <a name="LibraryPluginframeworkCran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/librarypluginframework"

&librarypluginframework.LibraryPluginframeworkCran {
	Package: *string,
	Repo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.package">Package</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.repo">Repo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}. |

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.package"></a>

```go
Package *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.repo"></a>

```go
Repo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}.

---

### LibraryPluginframeworkMaven <a name="LibraryPluginframeworkMaven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/librarypluginframework"

&librarypluginframework.LibraryPluginframeworkMaven {
	Coordinates: *string,
	Exclusions: *[]*string,
	Repo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.coordinates">Coordinates</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#coordinates LibraryPluginframework#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#exclusions LibraryPluginframework#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.repo">Repo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}. |

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.coordinates"></a>

```go
Coordinates *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#coordinates LibraryPluginframework#coordinates}.

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.exclusions"></a>

```go
Exclusions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#exclusions LibraryPluginframework#exclusions}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.repo"></a>

```go
Repo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}.

---

### LibraryPluginframeworkPypi <a name="LibraryPluginframeworkPypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/librarypluginframework"

&librarypluginframework.LibraryPluginframeworkPypi {
	Package: *string,
	Repo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.package">Package</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.repo">Repo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}. |

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.package"></a>

```go
Package *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.repo"></a>

```go
Repo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}.

---

## Classes <a name="Classes" id="Classes"></a>

### LibraryPluginframeworkCranList <a name="LibraryPluginframeworkCranList" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/librarypluginframework"

librarypluginframework.NewLibraryPluginframeworkCranList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LibraryPluginframeworkCranList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.get"></a>

```go
func Get(index *f64) LibraryPluginframeworkCranOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LibraryPluginframeworkCranOutputReference <a name="LibraryPluginframeworkCranOutputReference" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/librarypluginframework"

librarypluginframework.NewLibraryPluginframeworkCranOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LibraryPluginframeworkCranOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resetRepo"></a>

```go
func ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.packageInput">PackageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repoInput">RepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.package">Package</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repo">Repo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.packageInput"></a>

```go
func PackageInput() *string
```

- *Type:* *string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repoInput"></a>

```go
func RepoInput() *string
```

- *Type:* *string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.package"></a>

```go
func Package() *string
```

- *Type:* *string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repo"></a>

```go
func Repo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LibraryPluginframeworkMavenList <a name="LibraryPluginframeworkMavenList" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/librarypluginframework"

librarypluginframework.NewLibraryPluginframeworkMavenList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LibraryPluginframeworkMavenList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.get"></a>

```go
func Get(index *f64) LibraryPluginframeworkMavenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LibraryPluginframeworkMavenOutputReference <a name="LibraryPluginframeworkMavenOutputReference" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/librarypluginframework"

librarypluginframework.NewLibraryPluginframeworkMavenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LibraryPluginframeworkMavenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetRepo"></a>

```go
func ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinatesInput">CoordinatesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repoInput">RepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinates">Coordinates</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repo">Repo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoordinatesInput`<sup>Optional</sup> <a name="CoordinatesInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinatesInput"></a>

```go
func CoordinatesInput() *string
```

- *Type:* *string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repoInput"></a>

```go
func RepoInput() *string
```

- *Type:* *string

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinates"></a>

```go
func Coordinates() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusions"></a>

```go
func Exclusions() *[]*string
```

- *Type:* *[]*string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repo"></a>

```go
func Repo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LibraryPluginframeworkPypiList <a name="LibraryPluginframeworkPypiList" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/librarypluginframework"

librarypluginframework.NewLibraryPluginframeworkPypiList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LibraryPluginframeworkPypiList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.get"></a>

```go
func Get(index *f64) LibraryPluginframeworkPypiOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LibraryPluginframeworkPypiOutputReference <a name="LibraryPluginframeworkPypiOutputReference" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/librarypluginframework"

librarypluginframework.NewLibraryPluginframeworkPypiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LibraryPluginframeworkPypiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resetRepo"></a>

```go
func ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.packageInput">PackageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repoInput">RepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.package">Package</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repo">Repo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.packageInput"></a>

```go
func PackageInput() *string
```

- *Type:* *string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repoInput"></a>

```go
func RepoInput() *string
```

- *Type:* *string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.package"></a>

```go
func Package() *string
```

- *Type:* *string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repo"></a>

```go
func Repo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



