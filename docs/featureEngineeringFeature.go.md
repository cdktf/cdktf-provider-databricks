# `featureEngineeringFeature` Submodule <a name="`featureEngineeringFeature` Submodule" id="@cdktf/provider-databricks.featureEngineeringFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureEngineeringFeature <a name="FeatureEngineeringFeature" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature databricks_feature_engineering_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

featureengineeringfeature.NewFeatureEngineeringFeature(scope Construct, id *string, config FeatureEngineeringFeatureConfig) FeatureEngineeringFeature
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig">FeatureEngineeringFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig">FeatureEngineeringFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putFunction">PutFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putTimeWindow">PutTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFunction` <a name="PutFunction" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putFunction"></a>

```go
func PutFunction(value FeatureEngineeringFeatureFunction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putSource"></a>

```go
func PutSource(value FeatureEngineeringFeatureSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a>

---

##### `PutTimeWindow` <a name="PutTimeWindow" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putTimeWindow"></a>

```go
func PutTimeWindow(value FeatureEngineeringFeatureTimeWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetDescription"></a>

```go
func ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FeatureEngineeringFeature resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

featureengineeringfeature.FeatureEngineeringFeature_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

featureengineeringfeature.FeatureEngineeringFeature_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

featureengineeringfeature.FeatureEngineeringFeature_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

featureengineeringfeature.FeatureEngineeringFeature_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FeatureEngineeringFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FeatureEngineeringFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FeatureEngineeringFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FeatureEngineeringFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.function">Function</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference">FeatureEngineeringFeatureFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.source">Source</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference">FeatureEngineeringFeatureSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference">FeatureEngineeringFeatureTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.functionInput">FunctionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputsInput">InputsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindowInput">TimeWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputs">Inputs</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.function"></a>

```go
func Function() FeatureEngineeringFeatureFunctionOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference">FeatureEngineeringFeatureFunctionOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.source"></a>

```go
func Source() FeatureEngineeringFeatureSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference">FeatureEngineeringFeatureSourceOutputReference</a>

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindow"></a>

```go
func TimeWindow() FeatureEngineeringFeatureTimeWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference">FeatureEngineeringFeatureTimeWindowOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.functionInput"></a>

```go
func FunctionInput() interface{}
```

- *Type:* interface{}

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputsInput"></a>

```go
func InputsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindowInput"></a>

```go
func TimeWindowInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputs"></a>

```go
func Inputs() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureEngineeringFeatureConfig <a name="FeatureEngineeringFeatureConfig" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

&featureengineeringfeature.FeatureEngineeringFeatureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FullName: *string,
	Function: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.featureEngineeringFeature.FeatureEngineeringFeatureFunction,
	Inputs: *[]*string,
	Source: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.featureEngineeringFeature.FeatureEngineeringFeatureSource,
	TimeWindow: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.fullName">FullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.function">Function</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#function FeatureEngineeringFeature#function}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.inputs">Inputs</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#inputs FeatureEngineeringFeature#inputs}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#source FeatureEngineeringFeature#source}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#time_window FeatureEngineeringFeature#time_window}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#description FeatureEngineeringFeature#description}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}.

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.function"></a>

```go
Function FeatureEngineeringFeatureFunction
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#function FeatureEngineeringFeature#function}.

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.inputs"></a>

```go
Inputs *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#inputs FeatureEngineeringFeature#inputs}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.source"></a>

```go
Source FeatureEngineeringFeatureSource
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#source FeatureEngineeringFeature#source}.

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.timeWindow"></a>

```go
TimeWindow FeatureEngineeringFeatureTimeWindow
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#time_window FeatureEngineeringFeature#time_window}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#description FeatureEngineeringFeature#description}.

---

### FeatureEngineeringFeatureFunction <a name="FeatureEngineeringFeatureFunction" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

&featureengineeringfeature.FeatureEngineeringFeatureFunction {
	FunctionType: *string,
	ExtraParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.functionType">FunctionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#function_type FeatureEngineeringFeature#function_type}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.extraParameters">ExtraParameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#extra_parameters FeatureEngineeringFeature#extra_parameters}. |

---

##### `FunctionType`<sup>Required</sup> <a name="FunctionType" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.functionType"></a>

```go
FunctionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#function_type FeatureEngineeringFeature#function_type}.

---

##### `ExtraParameters`<sup>Optional</sup> <a name="ExtraParameters" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.extraParameters"></a>

```go
ExtraParameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#extra_parameters FeatureEngineeringFeature#extra_parameters}.

---

### FeatureEngineeringFeatureFunctionExtraParameters <a name="FeatureEngineeringFeatureFunctionExtraParameters" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

&featureengineeringfeature.FeatureEngineeringFeatureFunctionExtraParameters {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#key FeatureEngineeringFeature#key}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#value FeatureEngineeringFeature#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#key FeatureEngineeringFeature#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#value FeatureEngineeringFeature#value}.

---

### FeatureEngineeringFeatureSource <a name="FeatureEngineeringFeatureSource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

&featureengineeringfeature.FeatureEngineeringFeatureSource {
	DeltaTableSource: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.property.deltaTableSource">DeltaTableSource</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#delta_table_source FeatureEngineeringFeature#delta_table_source}. |

---

##### `DeltaTableSource`<sup>Optional</sup> <a name="DeltaTableSource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.property.deltaTableSource"></a>

```go
DeltaTableSource FeatureEngineeringFeatureSourceDeltaTableSource
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#delta_table_source FeatureEngineeringFeature#delta_table_source}.

---

### FeatureEngineeringFeatureSourceDeltaTableSource <a name="FeatureEngineeringFeatureSourceDeltaTableSource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

&featureengineeringfeature.FeatureEngineeringFeatureSourceDeltaTableSource {
	EntityColumns: *[]*string,
	FullName: *string,
	TimeseriesColumn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.entityColumns">EntityColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#entity_columns FeatureEngineeringFeature#entity_columns}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.fullName">FullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.timeseriesColumn">TimeseriesColumn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#timeseries_column FeatureEngineeringFeature#timeseries_column}. |

---

##### `EntityColumns`<sup>Required</sup> <a name="EntityColumns" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.entityColumns"></a>

```go
EntityColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#entity_columns FeatureEngineeringFeature#entity_columns}.

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}.

---

##### `TimeseriesColumn`<sup>Required</sup> <a name="TimeseriesColumn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.timeseriesColumn"></a>

```go
TimeseriesColumn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#timeseries_column FeatureEngineeringFeature#timeseries_column}.

---

### FeatureEngineeringFeatureTimeWindow <a name="FeatureEngineeringFeatureTimeWindow" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

&featureengineeringfeature.FeatureEngineeringFeatureTimeWindow {
	Duration: *string,
	Offset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#duration FeatureEngineeringFeature#duration}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.offset">Offset</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#offset FeatureEngineeringFeature#offset}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#duration FeatureEngineeringFeature#duration}.

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.offset"></a>

```go
Offset *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/feature_engineering_feature#offset FeatureEngineeringFeature#offset}.

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureEngineeringFeatureFunctionExtraParametersList <a name="FeatureEngineeringFeatureFunctionExtraParametersList" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

featureengineeringfeature.NewFeatureEngineeringFeatureFunctionExtraParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FeatureEngineeringFeatureFunctionExtraParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.get"></a>

```go
func Get(index *f64) FeatureEngineeringFeatureFunctionExtraParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureEngineeringFeatureFunctionExtraParametersOutputReference <a name="FeatureEngineeringFeatureFunctionExtraParametersOutputReference" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

featureengineeringfeature.NewFeatureEngineeringFeatureFunctionExtraParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FeatureEngineeringFeatureFunctionExtraParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureEngineeringFeatureFunctionOutputReference <a name="FeatureEngineeringFeatureFunctionOutputReference" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

featureengineeringfeature.NewFeatureEngineeringFeatureFunctionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FeatureEngineeringFeatureFunctionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putExtraParameters">PutExtraParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resetExtraParameters">ResetExtraParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtraParameters` <a name="PutExtraParameters" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putExtraParameters"></a>

```go
func PutExtraParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putExtraParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExtraParameters` <a name="ResetExtraParameters" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resetExtraParameters"></a>

```go
func ResetExtraParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParameters">ExtraParameters</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList">FeatureEngineeringFeatureFunctionExtraParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParametersInput">ExtraParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionTypeInput">FunctionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionType">FunctionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExtraParameters`<sup>Required</sup> <a name="ExtraParameters" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParameters"></a>

```go
func ExtraParameters() FeatureEngineeringFeatureFunctionExtraParametersList
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList">FeatureEngineeringFeatureFunctionExtraParametersList</a>

---

##### `ExtraParametersInput`<sup>Optional</sup> <a name="ExtraParametersInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParametersInput"></a>

```go
func ExtraParametersInput() interface{}
```

- *Type:* interface{}

---

##### `FunctionTypeInput`<sup>Optional</sup> <a name="FunctionTypeInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionTypeInput"></a>

```go
func FunctionTypeInput() *string
```

- *Type:* *string

---

##### `FunctionType`<sup>Required</sup> <a name="FunctionType" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionType"></a>

```go
func FunctionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference <a name="FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

featureengineeringfeature.NewFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumnsInput">EntityColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">TimeseriesColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumns">EntityColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumn">TimeseriesColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityColumnsInput`<sup>Optional</sup> <a name="EntityColumnsInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```go
func EntityColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `TimeseriesColumnInput`<sup>Optional</sup> <a name="TimeseriesColumnInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```go
func TimeseriesColumnInput() *string
```

- *Type:* *string

---

##### `EntityColumns`<sup>Required</sup> <a name="EntityColumns" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```go
func EntityColumns() *[]*string
```

- *Type:* *[]*string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `TimeseriesColumn`<sup>Required</sup> <a name="TimeseriesColumn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```go
func TimeseriesColumn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureEngineeringFeatureSourceOutputReference <a name="FeatureEngineeringFeatureSourceOutputReference" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

featureengineeringfeature.NewFeatureEngineeringFeatureSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FeatureEngineeringFeatureSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putDeltaTableSource">PutDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resetDeltaTableSource">ResetDeltaTableSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeltaTableSource` <a name="PutDeltaTableSource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putDeltaTableSource"></a>

```go
func PutDeltaTableSource(value FeatureEngineeringFeatureSourceDeltaTableSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putDeltaTableSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a>

---

##### `ResetDeltaTableSource` <a name="ResetDeltaTableSource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resetDeltaTableSource"></a>

```go
func ResetDeltaTableSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSource">DeltaTableSource</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference">FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSourceInput">DeltaTableSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeltaTableSource`<sup>Required</sup> <a name="DeltaTableSource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSource"></a>

```go
func DeltaTableSource() FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference">FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference</a>

---

##### `DeltaTableSourceInput`<sup>Optional</sup> <a name="DeltaTableSourceInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSourceInput"></a>

```go
func DeltaTableSourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureEngineeringFeatureTimeWindowOutputReference <a name="FeatureEngineeringFeatureTimeWindowOutputReference" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringfeature"

featureengineeringfeature.NewFeatureEngineeringFeatureTimeWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FeatureEngineeringFeatureTimeWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetOffset"></a>

```go
func ResetOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.offsetInput">OffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.offset">Offset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.offsetInput"></a>

```go
func OffsetInput() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.offset"></a>

```go
func Offset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



