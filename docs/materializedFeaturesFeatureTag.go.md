# `materializedFeaturesFeatureTag` Submodule <a name="`materializedFeaturesFeatureTag` Submodule" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaterializedFeaturesFeatureTag <a name="MaterializedFeaturesFeatureTag" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/materialized_features_feature_tag databricks_materialized_features_feature_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/materializedfeaturesfeaturetag"

materializedfeaturesfeaturetag.NewMaterializedFeaturesFeatureTag(scope Construct, id *string, config MaterializedFeaturesFeatureTagConfig) MaterializedFeaturesFeatureTag
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig">MaterializedFeaturesFeatureTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig">MaterializedFeaturesFeatureTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetValue"></a>

```go
func ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MaterializedFeaturesFeatureTag resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/materializedfeaturesfeaturetag"

materializedfeaturesfeaturetag.MaterializedFeaturesFeatureTag_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/materializedfeaturesfeaturetag"

materializedfeaturesfeaturetag.MaterializedFeaturesFeatureTag_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/materializedfeaturesfeaturetag"

materializedfeaturesfeaturetag.MaterializedFeaturesFeatureTag_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/materializedfeaturesfeaturetag"

materializedfeaturesfeaturetag.MaterializedFeaturesFeatureTag_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MaterializedFeaturesFeatureTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MaterializedFeaturesFeatureTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MaterializedFeaturesFeatureTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/materialized_features_feature_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MaterializedFeaturesFeatureTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.value">Value</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MaterializedFeaturesFeatureTagConfig <a name="MaterializedFeaturesFeatureTagConfig" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/materializedfeaturesfeaturetag"

&materializedfeaturesfeaturetag.MaterializedFeaturesFeatureTagConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/materialized_features_feature_tag#key MaterializedFeaturesFeatureTag#key}. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/materialized_features_feature_tag#value MaterializedFeaturesFeatureTag#value}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/materialized_features_feature_tag#key MaterializedFeaturesFeatureTag#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/materialized_features_feature_tag#value MaterializedFeaturesFeatureTag#value}.

---



