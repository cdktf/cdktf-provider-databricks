# `notificationDestination` Submodule <a name="`notificationDestination` Submodule" id="@cdktf/provider-databricks.notificationDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationDestination <a name="NotificationDestination" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination databricks_notification_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

new notificationDestination.NotificationDestination(scope: Construct, id: string, config: NotificationDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig">NotificationDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig">NotificationDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.putConfig"></a>

```typescript
public putConfig(value: NotificationDestinationConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetDestinationType` <a name="resetDestinationType" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetDestinationType"></a>

```typescript
public resetDestinationType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationDestination resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.isConstruct"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

notificationDestination.NotificationDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.isTerraformElement"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

notificationDestination.NotificationDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.isTerraformResource"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

notificationDestination.NotificationDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

notificationDestination.NotificationDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NotificationDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference">NotificationDestinationConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.config"></a>

```typescript
public readonly config: NotificationDestinationConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference">NotificationDestinationConfigAOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.configInput"></a>

```typescript
public readonly configInput: NotificationDestinationConfigA;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationDestinationConfig <a name="NotificationDestinationConfig" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

const notificationDestinationConfig: notificationDestination.NotificationDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#display_name NotificationDestination#display_name}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.destinationType">destinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#destination_type NotificationDestination#destination_type}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#id NotificationDestination#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#display_name NotificationDestination#display_name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.config"></a>

```typescript
public readonly config: NotificationDestinationConfigA;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#config NotificationDestination#config}

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#destination_type NotificationDestination#destination_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#id NotificationDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NotificationDestinationConfigA <a name="NotificationDestinationConfigA" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

const notificationDestinationConfigA: notificationDestination.NotificationDestinationConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.email">email</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.genericWebhook">genericWebhook</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a></code> | generic_webhook block. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.microsoftTeams">microsoftTeams</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a></code> | microsoft_teams block. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a></code> | pagerduty block. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.slack">slack</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a></code> | slack block. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.email"></a>

```typescript
public readonly email: NotificationDestinationConfigEmail;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#email NotificationDestination#email}

---

##### `genericWebhook`<sup>Optional</sup> <a name="genericWebhook" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.genericWebhook"></a>

```typescript
public readonly genericWebhook: NotificationDestinationConfigGenericWebhook;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

generic_webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#generic_webhook NotificationDestination#generic_webhook}

---

##### `microsoftTeams`<sup>Optional</sup> <a name="microsoftTeams" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.microsoftTeams"></a>

```typescript
public readonly microsoftTeams: NotificationDestinationConfigMicrosoftTeams;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

microsoft_teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#microsoft_teams NotificationDestination#microsoft_teams}

---

##### `pagerduty`<sup>Optional</sup> <a name="pagerduty" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.pagerduty"></a>

```typescript
public readonly pagerduty: NotificationDestinationConfigPagerduty;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#pagerduty NotificationDestination#pagerduty}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.slack"></a>

```typescript
public readonly slack: NotificationDestinationConfigSlack;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#slack NotificationDestination#slack}

---

### NotificationDestinationConfigEmail <a name="NotificationDestinationConfigEmail" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

const notificationDestinationConfigEmail: notificationDestination.NotificationDestinationConfigEmail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail.property.addresses">addresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#addresses NotificationDestination#addresses}. |

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#addresses NotificationDestination#addresses}.

---

### NotificationDestinationConfigGenericWebhook <a name="NotificationDestinationConfigGenericWebhook" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

const notificationDestinationConfigGenericWebhook: notificationDestination.NotificationDestinationConfigGenericWebhook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#password NotificationDestination#password}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.passwordSet">passwordSet</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#password_set NotificationDestination#password_set}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#url NotificationDestination#url}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.urlSet">urlSet</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#url_set NotificationDestination#url_set}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#username NotificationDestination#username}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.usernameSet">usernameSet</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#username_set NotificationDestination#username_set}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#password NotificationDestination#password}.

---

##### `passwordSet`<sup>Optional</sup> <a name="passwordSet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.passwordSet"></a>

```typescript
public readonly passwordSet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#password_set NotificationDestination#password_set}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#url NotificationDestination#url}.

---

##### `urlSet`<sup>Optional</sup> <a name="urlSet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.urlSet"></a>

```typescript
public readonly urlSet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#username NotificationDestination#username}.

---

##### `usernameSet`<sup>Optional</sup> <a name="usernameSet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.usernameSet"></a>

```typescript
public readonly usernameSet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#username_set NotificationDestination#username_set}.

---

### NotificationDestinationConfigMicrosoftTeams <a name="NotificationDestinationConfigMicrosoftTeams" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

const notificationDestinationConfigMicrosoftTeams: notificationDestination.NotificationDestinationConfigMicrosoftTeams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#url NotificationDestination#url}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.urlSet">urlSet</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#url_set NotificationDestination#url_set}. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#url NotificationDestination#url}.

---

##### `urlSet`<sup>Optional</sup> <a name="urlSet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.urlSet"></a>

```typescript
public readonly urlSet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

### NotificationDestinationConfigPagerduty <a name="NotificationDestinationConfigPagerduty" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

const notificationDestinationConfigPagerduty: notificationDestination.NotificationDestinationConfigPagerduty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKey">integrationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#integration_key NotificationDestination#integration_key}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKeySet">integrationKeySet</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#integration_key_set NotificationDestination#integration_key_set}. |

---

##### `integrationKey`<sup>Optional</sup> <a name="integrationKey" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#integration_key NotificationDestination#integration_key}.

---

##### `integrationKeySet`<sup>Optional</sup> <a name="integrationKeySet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKeySet"></a>

```typescript
public readonly integrationKeySet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#integration_key_set NotificationDestination#integration_key_set}.

---

### NotificationDestinationConfigSlack <a name="NotificationDestinationConfigSlack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

const notificationDestinationConfigSlack: notificationDestination.NotificationDestinationConfigSlack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#url NotificationDestination#url}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.urlSet">urlSet</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#url_set NotificationDestination#url_set}. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#url NotificationDestination#url}.

---

##### `urlSet`<sup>Optional</sup> <a name="urlSet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.urlSet"></a>

```typescript
public readonly urlSet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationDestinationConfigAOutputReference <a name="NotificationDestinationConfigAOutputReference" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

new notificationDestination.NotificationDestinationConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putEmail">putEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook">putGenericWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams">putMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty">putPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetGenericWebhook">resetGenericWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetMicrosoftTeams">resetMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetPagerduty">resetPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetSlack">resetSlack</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmail` <a name="putEmail" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putEmail"></a>

```typescript
public putEmail(value: NotificationDestinationConfigEmail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

---

##### `putGenericWebhook` <a name="putGenericWebhook" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook"></a>

```typescript
public putGenericWebhook(value: NotificationDestinationConfigGenericWebhook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

---

##### `putMicrosoftTeams` <a name="putMicrosoftTeams" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams"></a>

```typescript
public putMicrosoftTeams(value: NotificationDestinationConfigMicrosoftTeams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

---

##### `putPagerduty` <a name="putPagerduty" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty"></a>

```typescript
public putPagerduty(value: NotificationDestinationConfigPagerduty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

---

##### `putSlack` <a name="putSlack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack"></a>

```typescript
public putSlack(value: NotificationDestinationConfigSlack): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

---

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetGenericWebhook` <a name="resetGenericWebhook" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetGenericWebhook"></a>

```typescript
public resetGenericWebhook(): void
```

##### `resetMicrosoftTeams` <a name="resetMicrosoftTeams" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetMicrosoftTeams"></a>

```typescript
public resetMicrosoftTeams(): void
```

##### `resetPagerduty` <a name="resetPagerduty" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetPagerduty"></a>

```typescript
public resetPagerduty(): void
```

##### `resetSlack` <a name="resetSlack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetSlack"></a>

```typescript
public resetSlack(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference">NotificationDestinationConfigEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhook">genericWebhook</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference">NotificationDestinationConfigGenericWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeams">microsoftTeams</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference">NotificationDestinationConfigMicrosoftTeamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference">NotificationDestinationConfigPagerdutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference">NotificationDestinationConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.emailInput">emailInput</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhookInput">genericWebhookInput</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeamsInput">microsoftTeamsInput</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerdutyInput">pagerdutyInput</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slackInput">slackInput</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.email"></a>

```typescript
public readonly email: NotificationDestinationConfigEmailOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference">NotificationDestinationConfigEmailOutputReference</a>

---

##### `genericWebhook`<sup>Required</sup> <a name="genericWebhook" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhook"></a>

```typescript
public readonly genericWebhook: NotificationDestinationConfigGenericWebhookOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference">NotificationDestinationConfigGenericWebhookOutputReference</a>

---

##### `microsoftTeams`<sup>Required</sup> <a name="microsoftTeams" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeams"></a>

```typescript
public readonly microsoftTeams: NotificationDestinationConfigMicrosoftTeamsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference">NotificationDestinationConfigMicrosoftTeamsOutputReference</a>

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerduty"></a>

```typescript
public readonly pagerduty: NotificationDestinationConfigPagerdutyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference">NotificationDestinationConfigPagerdutyOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slack"></a>

```typescript
public readonly slack: NotificationDestinationConfigSlackOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference">NotificationDestinationConfigSlackOutputReference</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: NotificationDestinationConfigEmail;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

---

##### `genericWebhookInput`<sup>Optional</sup> <a name="genericWebhookInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhookInput"></a>

```typescript
public readonly genericWebhookInput: NotificationDestinationConfigGenericWebhook;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

---

##### `microsoftTeamsInput`<sup>Optional</sup> <a name="microsoftTeamsInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeamsInput"></a>

```typescript
public readonly microsoftTeamsInput: NotificationDestinationConfigMicrosoftTeams;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

---

##### `pagerdutyInput`<sup>Optional</sup> <a name="pagerdutyInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerdutyInput"></a>

```typescript
public readonly pagerdutyInput: NotificationDestinationConfigPagerduty;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slackInput"></a>

```typescript
public readonly slackInput: NotificationDestinationConfigSlack;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotificationDestinationConfigA;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

---


### NotificationDestinationConfigEmailOutputReference <a name="NotificationDestinationConfigEmailOutputReference" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

new notificationDestination.NotificationDestinationConfigEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resetAddresses">resetAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddresses` <a name="resetAddresses" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resetAddresses"></a>

```typescript
public resetAddresses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addressesInput">addressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addresses">addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addressesInput"></a>

```typescript
public readonly addressesInput: string[];
```

- *Type:* string[]

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotificationDestinationConfigEmail;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

---


### NotificationDestinationConfigGenericWebhookOutputReference <a name="NotificationDestinationConfigGenericWebhookOutputReference" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

new notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPasswordSet">resetPasswordSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrlSet">resetUrlSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsernameSet">resetUsernameSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPasswordSet` <a name="resetPasswordSet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPasswordSet"></a>

```typescript
public resetPasswordSet(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUrlSet` <a name="resetUrlSet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrlSet"></a>

```typescript
public resetUrlSet(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameSet` <a name="resetUsernameSet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsernameSet"></a>

```typescript
public resetUsernameSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSetInput">passwordSetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSetInput">urlSetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSetInput">usernameSetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSet">passwordSet</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSet">urlSet</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSet">usernameSet</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `passwordSetInput`<sup>Optional</sup> <a name="passwordSetInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSetInput"></a>

```typescript
public readonly passwordSetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `urlSetInput`<sup>Optional</sup> <a name="urlSetInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSetInput"></a>

```typescript
public readonly urlSetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameSetInput`<sup>Optional</sup> <a name="usernameSetInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSetInput"></a>

```typescript
public readonly usernameSetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordSet`<sup>Required</sup> <a name="passwordSet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSet"></a>

```typescript
public readonly passwordSet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `urlSet`<sup>Required</sup> <a name="urlSet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSet"></a>

```typescript
public readonly urlSet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameSet`<sup>Required</sup> <a name="usernameSet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSet"></a>

```typescript
public readonly usernameSet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotificationDestinationConfigGenericWebhook;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

---


### NotificationDestinationConfigMicrosoftTeamsOutputReference <a name="NotificationDestinationConfigMicrosoftTeamsOutputReference" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

new notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrlSet">resetUrlSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUrlSet` <a name="resetUrlSet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrlSet"></a>

```typescript
public resetUrlSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSetInput">urlSetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSet">urlSet</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `urlSetInput`<sup>Optional</sup> <a name="urlSetInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSetInput"></a>

```typescript
public readonly urlSetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `urlSet`<sup>Required</sup> <a name="urlSet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSet"></a>

```typescript
public readonly urlSet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotificationDestinationConfigMicrosoftTeams;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

---


### NotificationDestinationConfigPagerdutyOutputReference <a name="NotificationDestinationConfigPagerdutyOutputReference" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

new notificationDestination.NotificationDestinationConfigPagerdutyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKey">resetIntegrationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKeySet">resetIntegrationKeySet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntegrationKey` <a name="resetIntegrationKey" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKey"></a>

```typescript
public resetIntegrationKey(): void
```

##### `resetIntegrationKeySet` <a name="resetIntegrationKeySet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKeySet"></a>

```typescript
public resetIntegrationKeySet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeyInput">integrationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySetInput">integrationKeySetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKey">integrationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySet">integrationKeySet</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `integrationKeyInput`<sup>Optional</sup> <a name="integrationKeyInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeyInput"></a>

```typescript
public readonly integrationKeyInput: string;
```

- *Type:* string

---

##### `integrationKeySetInput`<sup>Optional</sup> <a name="integrationKeySetInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySetInput"></a>

```typescript
public readonly integrationKeySetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* string

---

##### `integrationKeySet`<sup>Required</sup> <a name="integrationKeySet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySet"></a>

```typescript
public readonly integrationKeySet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotificationDestinationConfigPagerduty;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

---


### NotificationDestinationConfigSlackOutputReference <a name="NotificationDestinationConfigSlackOutputReference" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer"></a>

```typescript
import { notificationDestination } from '@cdktf/provider-databricks'

new notificationDestination.NotificationDestinationConfigSlackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrlSet">resetUrlSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUrlSet` <a name="resetUrlSet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrlSet"></a>

```typescript
public resetUrlSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSetInput">urlSetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSet">urlSet</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `urlSetInput`<sup>Optional</sup> <a name="urlSetInput" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSetInput"></a>

```typescript
public readonly urlSetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `urlSet`<sup>Required</sup> <a name="urlSet" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSet"></a>

```typescript
public readonly urlSet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotificationDestinationConfigSlack;
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

---



